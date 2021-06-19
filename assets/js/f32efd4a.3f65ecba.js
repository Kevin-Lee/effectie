(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[392],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):f(f({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=l(n),m=o,h=s["".concat(c,".").concat(m)]||s[m]||u[m]||a;return n?r.createElement(h,f(f({ref:t},p),{},{components:n})):r.createElement(h,f({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,f=new Array(a);f[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,f[1]=i;for(var l=2;l<a;l++)f[l]=n[l];return r.createElement.apply(null,f)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3956:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return s}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),f=["components"],i={layout:"docs",title:"For Scalaz Effect"},c=void 0,l={unversionedId:"scalaz-effect/scalaz-effect",id:"scalaz-effect/scalaz-effect",isDocsHomePage:!1,title:"For Scalaz Effect",description:"Effectie for Scalaz Effect",source:"@site/../generated-docs/target/mdoc/scalaz-effect/scalaz-effect.md",sourceDirName:"scalaz-effect",slug:"/scalaz-effect/scalaz-effect",permalink:"/docs/scalaz-effect/scalaz-effect",version:"current",frontMatter:{layout:"docs",title:"For Scalaz Effect"},sidebar:"someSidebar",previous:{title:"ConsoleEffect",permalink:"/docs/monix/console-effect"},next:{title:"EffectConstructor",permalink:"/docs/scalaz-effect/effect-constructor"}},p=[{value:"Effectie for Scalaz Effect",id:"effectie-for-scalaz-effect",children:[]},{value:"All in One Example",id:"all-in-one-example",children:[]}],u={toc:p};function s(e){var t=e.components,n=(0,o.Z)(e,f);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"effectie-for-scalaz-effect"},"Effectie for Scalaz Effect"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"effect-constructor"},"EffectConstructor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"console-effect"},"ConsoleEffect")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"optiont-support"},"OptionTSupport")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"eithert-support"},"EitherTSupport"))),(0,a.kt)("h2",{id:"all-in-one-example"},"All in One Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import scalaz._\nimport Scalaz._\nimport scalaz.effect._\n\nimport effectie.scalaz.ConsoleEffectful._\nimport effectie.scalaz.Effectful._\n\nimport effectie.scalaz.EitherTSupport._\nimport effectie.scalaz.OptionTSupport._\nimport effectie.scalaz._\n\ntrait Something[F[_]] {\n  def foo[A: Semigroup](a: A): F[A]\n  def bar[A: Semigroup](a: Option[A]): F[Option[A]]\n  def baz[A, B: Semigroup](a: A \\/ B): F[A \\/ B]\n}\n\nobject Something {\n\n  def apply[F[_]: Something]: Something[F] =\n    implicitly[Something[F]]\n\n  implicit def something[F[_]: EffectConstructor: ConsoleEffect: Monad]: Something[F] =\n    new SomethingF[F]\n\n  final class SomethingF[F[_]: EffectConstructor: ConsoleEffect: Monad]\n    extends Something[F] {\n\n    override def foo[A: Semigroup](a: A): F[A] =\n      for {\n        n <- effectOf(a)\n        blah <- pureOf("blah blah")\n        _ <- effectOf(println(s"n: $n / BLAH: $blah"))\n        x <- effectOf(n |+| n)\n        _ <- putStrLn(s"x: $x")\n      } yield x\n\n    override def bar[A: Semigroup](a: Option[A]): F[Option[A]] =\n      (for {\n        a <- optionTOfPure(a)\n        blah <- optionTOfPure("blah blah".some)\n        _ <- optionTSome(println(s"a: $a / BLAH: $blah"))\n        x <- optionTSomeF(effectOf(a |+| a))\n        _ <- optionTSomeF(putStrLn(s"x: $x"))\n      } yield x).run\n\n    override def baz[A, B: Semigroup](ab: A \\/ B): F[A \\/ B] =\n      (for {\n        b <- eitherTOf(ab)\n        blah <- eitherTOfPure("blah blah".right[A])\n        _ <- eitherTRight(println(s"b: $b / BLAH: $blah"))\n        x <- eitherTRightF(effectOf(b |+| b))\n        _ <- eitherTRightF[A](putStrLn(s"x: $x"))\n      } yield x).run\n  }\n}\n\nprintln(Something[IO].foo(1).unsafePerformIO())\n// n: 1 / BLAH: blah blah\n// x: 2\n// 2\n\nprintln(Something[IO].bar(2.some).unsafePerformIO())\n// a: 2 / BLAH: blah blah\n// x: 4\n// Some(4)\nprintln(Something[IO].bar(none[String]).unsafePerformIO())\n// None\n\nprintln(Something[IO].baz(2.right[String]).unsafePerformIO())\n// b: 2 / BLAH: blah blah\n// x: 4\n// \\/-(4)\nprintln(Something[IO].baz("ERROR!!!".left[Int]).unsafePerformIO())\n// -\\/(ERROR!!!)\n')))}s.isMDXComponent=!0}}]);