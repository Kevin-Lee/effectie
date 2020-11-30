(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{132:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/effectie-logo-96x96-e63a86ccb6f2e7637f259ff47575cf69.png"},75:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return b}));var n=a(2),c=a(6),r=(a(0),a(80)),i={id:"getting-started",title:"Getting Started",slug:"/"},l={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Effectie Logo Effectie",source:"@site/../generated-docs/target/mdoc/getting-started.md",slug:"/",permalink:"/docs/",version:"current",sidebar:"someSidebar",next:{title:"For Cats Effect",permalink:"/docs/cats-effect/cats-effect"}},o=[{value:"Effectie Logo Effectie",id:"effectie-logo-effectie",children:[]},{value:"Getting Started",id:"getting-started",children:[{value:"For Cats Effect",id:"for-cats-effect",children:[]},{value:"For Scalaz Effect",id:"for-scalaz-effect",children:[]}]},{value:"Why?",id:"why",children:[]}],f={rightToc:o};function b(e){var t=e.components,i=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},f,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"effectie-logo-effectie"},Object(r.b)("img",{alt:"Effectie Logo",src:a(132).default})," Effectie"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Kevin-Lee/effectie/actions?workflow=Build-All"}),Object(r.b)("img",Object(n.a)({parentName:"a"},{src:"https://github.com/Kevin-Lee/effectie/workflows/Build-All/badge.svg",alt:"Build Status"}))),"\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Kevin-Lee/effectie/actions?workflow=Release"}),Object(r.b)("img",Object(n.a)({parentName:"a"},{src:"https://github.com/Kevin-Lee/effectie/workflows/Release/badge.svg",alt:"Release Status"}))),"\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://index.scala-lang.org/kevin-lee/effectie"}),Object(r.b)("img",Object(n.a)({parentName:"a"},{src:"https://index.scala-lang.org/kevin-lee/effectie/latest.svg",alt:"Latest version"})))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"right"}),"Project"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Bintray"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Maven Central"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"effectie-cats-effect"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"https://bintray.com/kevinlee/maven/effectie-cats-effect/_latestVersion"}),Object(r.b)("img",Object(n.a)({parentName:"a"},{src:"https://api.bintray.com/packages/kevinlee/maven/effectie-cats-effect/images/download.svg",alt:"Download"})))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"https://search.maven.org/artifact/io.kevinlee/effectie-cats-effect_2.13"}),Object(r.b)("img",Object(n.a)({parentName:"a"},{src:"https://maven-badges.herokuapp.com/maven-central/io.kevinlee/effectie-cats-effect_2.13/badge.svg",alt:"Maven Central"}))))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"effectie-scalaz-effect"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"https://bintray.com/kevinlee/maven/effectie-scalaz-effect/_latestVersion"}),Object(r.b)("img",Object(n.a)({parentName:"a"},{src:"https://api.bintray.com/packages/kevinlee/maven/effectie-scalaz-effect/images/download.svg",alt:"Download"})))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"https://search.maven.org/artifact/io.kevinlee/effectie-scalaz-effect_2.13"}),Object(r.b)("img",Object(n.a)({parentName:"a"},{src:"https://maven-badges.herokuapp.com/maven-central/io.kevinlee/effectie-scalaz-effect_2.13/badge.svg",alt:"Maven Central"}))))))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Supported Scala Versions: ",Object(r.b)("inlineCode",{parentName:"li"},"2.11.12"),", ",Object(r.b)("inlineCode",{parentName:"li"},"2.12.12"),", ",Object(r.b)("inlineCode",{parentName:"li"},"2.13.3")," and ",Object(r.b)("inlineCode",{parentName:"li"},"3.0.0-M2"))),Object(r.b)("p",null,"A set of type-classes and utils for functional effect libraries (i.e. Scalaz and Cats Effect)."),Object(r.b)("p",null,"Why Effectie? Please read ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#why"}),'"Why?"')," section."),Object(r.b)("h2",{id:"getting-started"},"Getting Started"),Object(r.b)("h3",{id:"for-cats-effect"},"For Cats Effect"),Object(r.b)("p",null,"In ",Object(r.b)("inlineCode",{parentName:"p"},"build.sbt"),","),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),'libraryDependencies += "io.kevinlee" %% "effectie-cats-effect" % "1.7.0"\n')),Object(r.b)("p",null,"then import"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),"import effectie.cats.ConsoleEffectful._\nimport effectie.cats.Effectful._\n\nimport effectie.cats.EitherTSupport._\nimport effectie.cats.OptionTSupport._\nimport effectie.cats._\n")),Object(r.b)("p",null,"For more details, check out ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"cats-effect/cats-effect"}),"Effectie for Cats Effect"),"."),Object(r.b)("h3",{id:"for-scalaz-effect"},"For Scalaz Effect"),Object(r.b)("p",null,"In ",Object(r.b)("inlineCode",{parentName:"p"},"build.sbt"),","),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),'libraryDependencies += "io.kevinlee" %% "effectie-scalaz-effect" % "1.7.0"\n')),Object(r.b)("p",null,"then import"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),"import effectie.scalaz.ConsoleEffectful._\nimport effectie.scalaz.Effectful._\n\nimport effectie.scalaz.EitherTSupport._\nimport effectie.scalaz.OptionTSupport._\nimport effectie.scalaz._\n")),Object(r.b)("p",null,"For more details, check out ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"scalaz-effect/scalaz-effect"}),"Effectie for Scalaz Effect"),"."),Object(r.b)("h2",{id:"why"},"Why?"),Object(r.b)("p",null,"Tagless final gives us power to defer the decision of the implementations of contexts we're binding and functional effect libraries like Cats Effect and Scalaz Effect give us referential transparency. There might be an issue though with constructing an effect type data. It is actually an issue with Cats Effect as Cats Effect ",Object(r.b)("inlineCode",{parentName:"p"},"IO"),"'s ",Object(r.b)("inlineCode",{parentName:"p"},"pure")," (or ",Object(r.b)("inlineCode",{parentName:"p"},"Monad.pure"),") is not referentially transparent. "),Object(r.b)("p",null,"Let's check out some code examples."),Object(r.b)("p",null,"e.g.) Cats Effect"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),'import cats.effect._\n\n// or cats.Monad[IO].pure(println("a"))\nval io = IO.pure(println("a"))\n// a\n// io: IO[Unit] = Pure(a = ())\n// It is not referentially transparent so immediately evaluates println("a") \n\nio.unsafeRunSync()\nio.unsafeRunSync()\n')),Object(r.b)("p",null,"e.g.) Scalaz Effect"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),'import scalaz._, scalaz.effect._\n\nval io = Monad[IO].pure(println("a"))\n// io: IO[Unit] = scalaz.effect.IO$$anon$7@74424b7e\n// It is referentially transparent so println("a") is not evaluated here.\n\nio.unsafePerformIO()\n// a\nio.unsafePerformIO()\n// a\n')),Object(r.b)("p",null,"So to have referential transparency when using Cats Effect, ",Object(r.b)("inlineCode",{parentName:"p"},"IO.apply()")," should be used."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),'import cats.effect._\n\nval io = IO(println("a"))\n// io: IO[Unit] = Delay(thunk = <function0>)\n// Now it is referentially transparent so println("a") is not evaluated here. \n\nio.unsafeRunSync()\n// a\nio.unsafeRunSync()\n// a\n')),Object(r.b)("p",null,"Now, let's use Cats Effect with tagless final."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),'import cats.effect._\n\ntrait Foo[F[_]] {\n  def get[A](a: => A): F[A]\n}\n\nclass Bar[F[_]] extends Foo[F] {\n  def get[A](a: => A): F[A] =\n    // How would you construct F[A]?\n}\n\n// call-site\nval bar = new Bar[IO]\nbar.get(1)\nbar.get(println("a"))\n')),Object(r.b)("p",null,"How would you construct ",Object(r.b)("inlineCode",{parentName:"p"},"F[A]"),"? You could probably do ",Object(r.b)("inlineCode",{parentName:"p"},"Applicative[F].pure")," or ",Object(r.b)("inlineCode",{parentName:"p"},"Monad[F].pure(a)"),". "),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),"import cats._\n\nclass Bar[F[_]: Applicative] extends Foo[F] { // or [F[_]: Monad]\n  def get[A](a: => A): F[A] =\n    Applicative[F].pure(a) // or Monad[F].pure(a)\n}\n")),Object(r.b)("p",null,"However, neither ",Object(r.b)("inlineCode",{parentName:"p"},"Applicative.pure")," nor ",Object(r.b)("inlineCode",{parentName:"p"},"Monad.pure")," in Cats are referentially transparent when it's mixed with impure code (e.g. some side-effect code like ",Object(r.b)("inlineCode",{parentName:"p"},'println("a")'),").\nSo If you do this,"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),'val bar = new Bar[IO]\nval iou = bar.get(println("a"))\n// a is printed here\n// and you get IO[Unit]\n\niou.unsafeRunSync() // This does not print anything but returns ()\n')),Object(r.b)("p",null,"With Effectie you can do this."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),'import cats.effect._\n\nimport effectie.cats._\n\ntrait Foo[F[_]] {\n  def get[A](a: => A): F[A]\n}\n\nclass Bar[F[_]: EffectConstructor] extends Foo[F] {\n  def get[A](a: => A): F[A] =\n    EffectConstructor[F].effectOf(a)\n}\n\n// call-site\nval bar = new Bar[IO]\n// bar: Bar[IO] = repl.MdocSession$App9$Bar@5d0dc602\nval iou = bar.get(println("a"))\n// iou: IO[Unit] = Delay(thunk = <function0>)\n// This does not print anything here.\n\niou.unsafeRunSync()\n// a\niou.unsafeRunSync()\n// a\n')),Object(r.b)("p",null,"Or a more convenient way like"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),'import cats.effect._\n\nimport effectie.cats.Effectful._\nimport effectie.cats._\n\ntrait Foo[F[_]] {\n  def get[A](a: => A): F[A]\n}\n\nclass Bar[F[_]: EffectConstructor] extends Foo[F] {\n  def get[A](a: => A): F[A] =\n    effectOf(a) // no more EffectConstructor[F].effectOf\n}\n\n// call-site\nval bar = new Bar[IO]\n// bar: Bar[IO] = repl.MdocSession$App12$Bar@40438789\nval iou = bar.get(println("a"))\n// iou: IO[Unit] = Delay(thunk = <function0>)\n// This does not print anything here.\n\niou.unsafeRunSync()\n// a\niou.unsafeRunSync()\n// a\n')),Object(r.b)("p",null,"Check out"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"cats-effect/cats-effect"}),"Effectie for Cats Effect")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"scalaz-effect/scalaz-effect"}),"Effectie for Scalaz Effect"))))}b.isMDXComponent=!0},80:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return O}));var n=a(0),c=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var f=c.a.createContext({}),b=function(e){var t=c.a.useContext(f),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=b(e.components);return c.a.createElement(f.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},u=c.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,f=o(e,["components","mdxType","originalType","parentName"]),s=b(a),u=n,O=s["".concat(i,".").concat(u)]||s[u]||p[u]||r;return a?c.a.createElement(O,l(l({ref:t},f),{},{components:a})):c.a.createElement(O,l({ref:t},f))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var f=2;f<r;f++)i[f]=a[f];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);