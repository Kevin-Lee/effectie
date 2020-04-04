import ProjectInfo._
import kevinlee.sbt.SbtCommon.crossVersionProps
import just.semver.SemVer
import SemVer.{Major, Minor}
import microsites.ConfigYml

val ProjectScalaVersion: String = "2.13.1"
val CrossScalaVersions: Seq[String] = Seq("2.11.12", "2.12.11", ProjectScalaVersion)
val IncludeTest: String = "compile->compile;test->test"

lazy val hedgehogVersion = "97854199ef795a5dfba15478fd9abe66035ddea2"
lazy val hedgehogRepo: MavenRepository =
  "bintray-scala-hedgehog" at "https://dl.bintray.com/hedgehogqa/scala-hedgehog"

lazy val hedgehogLibs: Seq[ModuleID] = Seq(
    "qa.hedgehog" %% "hedgehog-core" % hedgehogVersion % Test
  , "qa.hedgehog" %% "hedgehog-runner" % hedgehogVersion % Test
  , "qa.hedgehog" %% "hedgehog-sbt" % hedgehogVersion % Test
)

lazy val libCatsCore: Seq[ModuleID] = Seq("org.typelevel" %% "cats-core" % "2.1.1")
lazy val libCatsEffect: Seq[ModuleID] = Seq("org.typelevel" %% "cats-effect" % "2.1.2")

lazy val libCatsCore_2_0_0: Seq[ModuleID] = Seq("org.typelevel" %% "cats-core" % "2.0.0")
lazy val libCatsEffect_2_0_0: Seq[ModuleID] = Seq("org.typelevel" %% "cats-effect" % "2.0.0")

ThisBuild / scalaVersion     := ProjectScalaVersion
ThisBuild / version          := ProjectVersion
ThisBuild / organization     := "io.kevinlee"
ThisBuild / organizationName := "Kevin's Code"
ThisBuild / crossScalaVersions := CrossScalaVersions
ThisBuild / developers   := List(
  Developer("Kevin-Lee", "Kevin Lee", "kevin.code@kevinlee.io", url("https://github.com/Kevin-Lee"))
)
ThisBuild / homepage := Some(url("https://github.com/Kevin-Lee/effectie"))
ThisBuild / scmInfo :=
  Some(ScmInfo(
    url("https://github.com/Kevin-Lee/effectie")
    , "git@github.com:Kevin-Lee/effectie.git"
  ))

def prefixedProjectName(name: String) = s"effectie${if (name.isEmpty) "" else s"-$name"}"

lazy val noPublish: SettingsDefinition = Seq(
  publish := {},
  publishLocal := {},
  publishArtifact := false,
  skip in packagedArtifacts := true,
  skip in publish := true
)

def projectCommonSettings(id: String, projectName: ProjectName, file: File): Project =
  Project(id, file)
    .settings(
        name := prefixedProjectName(projectName.projectName)
      , addCompilerPlugin("org.typelevel" % "kind-projector" % "0.11.0" cross CrossVersion.full)
      , addCompilerPlugin("com.olegpy" %% "better-monadic-for" % "0.3.1")
      , resolvers ++= Seq(
          Resolver.sonatypeRepo("releases")
        , hedgehogRepo
        )
      , libraryDependencies ++= hedgehogLibs
      , wartremoverErrors in (Compile, compile) ++= commonWarts((scalaBinaryVersion in update).value)
      , wartremoverErrors in (Test, compile) ++= commonWarts((scalaBinaryVersion in update).value)
      , testFrameworks ++= Seq(TestFramework("hedgehog.sbt.Framework"))

      /* Ammonite-REPL { */
      , libraryDependencies ++=
        (scalaBinaryVersion.value match {
          case "2.10" =>
            Seq.empty[ModuleID]
          case "2.11" =>
            Seq("com.lihaoyi" % "ammonite" % "1.6.7" % Test cross CrossVersion.full)
          case "2.12" =>
            Seq.empty[ModuleID] // TODO: add ammonite when it supports Scala 2.12.11
          case _ =>
            Seq("com.lihaoyi" % "ammonite" % "2.0.4" % Test cross CrossVersion.full)
        })
      , sourceGenerators in Test +=
        (scalaBinaryVersion.value match {
          case "2.10" =>
            task(Seq.empty[File])
          case "2.12" =>
            task(Seq.empty[File]) // TODO: add ammonite when it supports Scala 2.12.11
          case _ =>
            task {
              val file = (sourceManaged in Test).value / "amm.scala"
              IO.write(file, """object amm extends App { ammonite.Main.main(args) }""")
              Seq(file)
            }
        })
      /* } Ammonite-REPL */
      /* Bintray { */
      , bintrayPackageLabels := Seq("Scala", "Effect", "Referential Transparency", "Tagless Final", "Finally Tagless", "Functional Programming", "FP")
      , bintrayVcsUrl := Some("""git@github.com:Kevin-Lee/effectie.git""")
      , licenses += ("MIT", url("http://opensource.org/licenses/MIT"))
      /* } Bintray */

      /* Coveralls { */
      , coverageHighlighting := (CrossVersion.partialVersion(scalaVersion.value) match {
        case Some((2, 10)) =>
          false
        case _ =>
          true
      })
      /* } Coveralls */
    )

lazy val effectie = (project in file("."))
  .settings(
    name := prefixedProjectName("")
  , description := "Effect Utils"
  )
  .dependsOn(core, catsEffect)
  .settings(noPublish)

lazy val core = projectCommonSettings("core", ProjectName("core"), file("core"))
  .enablePlugins(DevOopsGitReleasePlugin)
  .settings(
      description  := "Effect Utils - Core"
    , libraryDependencies :=
      crossVersionProps(
          Seq.empty
        , SemVer.parseUnsafe(scalaVersion.value)
      ) {
          case (Major(2), Minor(10)) =>
            libraryDependencies.value.filterNot(m => m.organization == "org.wartremover" && m.name == "wartremover")
          case x =>
            libraryDependencies.value
        }
    , initialCommands in console :=
      """import effectie._"""

  )

lazy val catsEffect = projectCommonSettings("catsEffect", ProjectName("cats-effect"), file("cats-effect"))
  .enablePlugins(DevOopsGitReleasePlugin)
  .settings(
      description  := "Effect Utils - Cats Effect"
    , libraryDependencies :=
      crossVersionProps(
          List.empty
        , SemVer.parseUnsafe(scalaVersion.value)
      ) {
          case (Major(2), Minor(10)) =>
            libraryDependencies.value.filterNot(m => m.organization == "org.wartremover" && m.name == "wartremover") ++
              libCatsCore_2_0_0 ++ libCatsEffect_2_0_0
          case (Major(2), Minor(11)) =>
            libraryDependencies.value ++ libCatsCore_2_0_0 ++ libCatsEffect_2_0_0
          case x =>
            libraryDependencies.value ++ libCatsCore ++ libCatsEffect
        }
    , initialCommands in console :=
      """import effectie.cats._"""

  )
  .dependsOn(core % IncludeTest)

lazy val docDir = file("docs")
lazy val docs = (project in docDir)
  .enablePlugins(MicrositesPlugin)
  .settings(
      name := prefixedProjectName("docs")
    /* microsites { */
    , micrositeName := prefixedProjectName("")
    , micrositeAuthor := "Kevin Lee"
    , micrositeHomepage := "https://blog.kevinlee.io"
    , micrositeDescription := "effectie"
    , micrositeGithubOwner := "Kevin-Lee"
    , micrositeGithubRepo := "effectie"
    , micrositeBaseUrl := "/effectie"
    , micrositeDocumentationUrl := s"${micrositeBaseUrl.value}/docs"
    , micrositePushSiteWith := GitHub4s
    , micrositeGithubToken := sys.env.get("GITHUB_TOKEN")
    //  , micrositeTheme := "pattern"
    , micrositeHighlightTheme := "atom-one-light"
    , micrositeGitterChannel := false
    , micrositeGithubLinks := false
    , micrositeShareOnSocial := false
    , micrositeHighlightLanguages ++= Seq("shell")

    , micrositeConfigYaml := ConfigYml(
      yamlPath = Some(docDir / "microsite" / "_config.yml")
    )
    , micrositeImgDirectory := docDir / "microsite" / "img"
    , micrositeCssDirectory := docDir / "microsite" / "css"
    , micrositeSassDirectory := docDir / "microsite" / "sass"
    , micrositeJsDirectory := docDir / "microsite" / "js"
    , micrositeExternalLayoutsDirectory := docDir / "microsite" / "layouts"
    , micrositeExternalIncludesDirectory := docDir / "microsite" / "includes"
    , micrositeDataDirectory := docDir / "microsite" / "data"
    , micrositeStaticDirectory := docDir / "microsite" / "static"
    , micrositeExtraMdFilesOutput := docDir / "microsite" / "extra_md"
    , micrositePluginsDirectory := docDir / "microsite" / "plugins"

    /* } microsites */

  )
  .settings(noPublish)
  .dependsOn(core, catsEffect)
