(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[717],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),f=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=f(e.components);return o.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=f(n),m=r,O=s["".concat(c,".").concat(m)]||s[m]||l[m]||i;return n?o.createElement(O,a(a({ref:t},u),{},{components:n})):o.createElement(O,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=s;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var f=2;f<i;f++)a[f]=n[f];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6009:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return f},toc:function(){return u},default:function(){return s}});var o=n(2122),r=n(9756),i=(n(7294),n(3905)),a=["components"],p={layout:"docs",title:"OptionTSupport"},c=void 0,f={unversionedId:"scalaz-effect/optiont-support",id:"scalaz-effect/optiont-support",isDocsHomePage:!1,title:"OptionTSupport",description:"OptionTSupport",source:"@site/../generated-docs/target/mdoc/scalaz-effect/optiont-support.md",sourceDirName:"scalaz-effect",slug:"/scalaz-effect/optiont-support",permalink:"/docs/scalaz-effect/optiont-support",version:"current",frontMatter:{layout:"docs",title:"OptionTSupport"},sidebar:"someSidebar",previous:{title:"CanCatch",permalink:"/docs/scalaz-effect/can-catch"},next:{title:"EitherTSupport",permalink:"/docs/scalaz-effect/eithert-support"}},u=[{value:"OptionTSupport",id:"optiontsupport",children:[]}],l={toc:u};function s(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"optiontsupport"},"OptionTSupport"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import scalaz._\nimport Scalaz._\n\nimport effectie.scalaz.Effectful._\nimport effectie.scalaz._\nimport effectie.scalaz.OptionTSupport._\n\ntrait Something[F[_]] {\n  def foo(a: Int): F[Option[Int]]\n  def bar(a: Option[Int]): F[Option[Int]]\n}\n\nobject Something {\n  def apply[F[_]: Something]: Something[F] =\n    implicitly[Something[F]]\n\n  implicit def something[F[_]: EffectConstructor: Monad]: Something[F] =\n    new SomethingF[F]\n\n  final class SomethingF[F[_]: EffectConstructor: Monad]\n    extends Something[F] {\n\n    def foo(a: Int): F[Option[Int]] = (for {\n      x <- optionTSomePure(a) // == OptionT.liftF(pureOf(a))\n      y <- optionTSome(x + 10) // == OptionT.liftF(effectOf(x + 10))\n      z <- optionTSomeF(effectOf(y + 100)) // == OptionT.lieftF(effectOf(y + 100))\n    } yield z).run\n\n    def bar(a: Option[Int]): F[Option[Int]] = (for {\n      x <- optionTOfPure(a) // == OptionT(pureOf(a: Option[Int]))\n      y <- optionTOf((x + 999).some)  // == OptionT(effectOf((x + 999).some))\n    } yield y).run\n  }\n\n}\n\nimport scalaz.effect._\n\nSomething[IO].foo(1).unsafePerformIO()\n// res1: Option[Int] = Some(value = 111)\nSomething[IO].foo(10).unsafePerformIO()\n// res2: Option[Int] = Some(value = 120)\n\nSomething[IO].bar(1.some).unsafePerformIO()\n// res3: Option[Int] = Some(value = 1000)\nSomething[IO].bar(none[Int]).unsafePerformIO()\n// res4: Option[Int] = None\n")))}s.isMDXComponent=!0}}]);