(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[452],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return s}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function f(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=f(e,["components","mdxType","originalType","parentName"]),m=c(t),s=o,h=m["".concat(l,".").concat(s)]||m[s]||u[s]||i;return t?r.createElement(h,a(a({ref:n},p),{},{components:t})):r.createElement(h,a({ref:n},p))}));function s(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var f={};for(var l in n)hasOwnProperty.call(n,l)&&(f[l]=n[l]);f.originalType=e,f.mdxType="string"==typeof e?e:o,a[1]=f;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1615:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return f},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=t(2122),o=t(9756),i=(t(7294),t(3905)),a=["components"],f={id:"monix",title:"For Monix"},l=void 0,c={unversionedId:"monix/monix",id:"monix/monix",isDocsHomePage:!1,title:"For Monix",description:"Effectie for Monix",source:"@site/../generated-docs/target/mdoc/monix/monix.md",sourceDirName:"monix",slug:"/monix/monix",permalink:"/docs/monix/monix",version:"current",frontMatter:{id:"monix",title:"For Monix"},sidebar:"someSidebar",previous:{title:"ConsoleEffect",permalink:"/docs/cats-effect/console-effect"},next:{title:"EffectConstructor",permalink:"/docs/monix/effect-constructor"}},p=[{value:"Effectie for Monix",id:"effectie-for-monix",children:[]},{value:"All in One Example",id:"all-in-one-example",children:[]}],u={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"effectie-for-monix"},"Effectie for Monix"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"effect-constructor"},"EffectConstructor")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"console-effect"},"ConsoleEffect")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"can-catch"},"CanCatch")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"can-handle-error"},"CanHandleError")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"from-future"},"FromFuture")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"optiont-support"},"OptionTSupport")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"eithert-support"},"EitherTSupport"))),(0,i.kt)("h2",{id:"all-in-one-example"},"All in One Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import cats._\nimport cats.syntax.all._\nimport monix.eval._\n\nimport effectie.monix.ConsoleEffectful._\nimport effectie.monix.Effectful._\n\nimport effectie.monix.EitherTSupport._\nimport effectie.monix.OptionTSupport._\nimport effectie.monix._\n\ntrait Something[F[_]] {\n  def foo[A: Semigroup](a: A): F[A]\n  def bar[A: Semigroup](a: Option[A]): F[Option[A]]\n  def baz[A, B: Semigroup](a: Either[A, B]): F[Either[A, B]]\n}\n\nobject Something {\n\n  def apply[F[_]: Something]: Something[F] =\n    implicitly[Something[F]]\n\n  implicit def something[F[_]: EffectConstructor: ConsoleEffect: Monad]: Something[F] =\n    new SomethingF[F]\n\n  final class SomethingF[F[_]: EffectConstructor: ConsoleEffect: Monad]\n    extends Something[F] {\n\n    override def foo[A: Semigroup](a: A): F[A] =\n      for {\n        n <- effectOf(a)\n        blah <- pureOf("blah blah")\n        _ <- effectOf(println(s"n: $n / BLAH: $blah"))\n        x <- effectOf(n |+| n)\n        _ <- putStrLn(s"x: $x")\n      } yield x\n\n    override def bar[A: Semigroup](a: Option[A]): F[Option[A]] =\n      (for {\n        a <- optionTOfPure(a)\n        blah <- optionTOfPure("blah blah".some)\n        _ <- optionTSome(println(s"a: $a / BLAH: $blah"))\n        x <- optionTSomeF(effectOf(a |+| a))\n        _ <- optionTSomeF(putStrLn(s"x: $x"))\n      } yield x).value\n\n    override def baz[A, B: Semigroup](ab: Either[A, B]): F[Either[A, B]] =\n      (for {\n        b <- eitherTOf(ab)\n        blah <- eitherTOfPure("blah blah".asRight[A])\n        _ <- eitherTRight(println(s"b: $b / BLAH: $blah"))\n        x <- eitherTRightF(effectOf(b |+| b))\n        _ <- eitherTRightF[A](putStrLn(s"x: $x"))\n      } yield x).value\n  }\n}\nimport monix.execution.Scheduler.Implicits.global\n\nprintln(Something[Task].foo(1).runSyncUnsafe())\n// n: 1 / BLAH: blah blah\n// x: 2\n// 2\n\nprintln(Something[Task].bar(2.some).runSyncUnsafe())\n// a: 2 / BLAH: blah blah\n// x: 4\n// Some(4)\nprintln(Something[Task].bar(none[String]).runSyncUnsafe())\n// None\n\nprintln(Something[Task].baz(2.asRight[String]).runSyncUnsafe())\n// b: 2 / BLAH: blah blah\n// x: 4\n// Right(4)\nprintln(Something[Task].baz("ERROR!!!".asLeft[Int]).runSyncUnsafe())\n// Left(ERROR!!!)\n')))}m.isMDXComponent=!0}}]);