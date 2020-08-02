(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return f})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(2),c=n(9),o=(n(0),n(159)),a={layout:"docs",title:"EffectConstructor - Scalaz"},f={id:"scalaz-effect/effect-constructor",isDocsHomePage:!1,title:"EffectConstructor - Scalaz",description:"EffectConstructor",source:"@site/../generated-docs/target/mdoc/scalaz-effect/effect-constructor.md",permalink:"/docs/scalaz-effect/effect-constructor",sidebar:"someSidebar",previous:{title:"For Scalaz Effect",permalink:"/docs/scalaz-effect/scalaz-effect"},next:{title:"CanCatch - Scalaz",permalink:"/docs/scalaz-effect/can-catch"}},i=[{value:"EffectConstructor",id:"effectconstructor",children:[]},{value:"Effectful",id:"effectful",children:[]}],l={rightToc:i};function u(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"effectconstructor"},"EffectConstructor"),Object(o.b)("p",null,"If you use Scalaz Effect and write tagless final code, and look for a generic way to construct ",Object(o.b)("inlineCode",{parentName:"p"},"F[A]"),", ",Object(o.b)("inlineCode",{parentName:"p"},"EffectConstructor")," can help you."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-scala"}),"import effectie.scalaz._\n\ntrait Something[F[_]] {\n  def get[A](a: => A): F[A]\n}\n\nobject Something {\n  def apply[F[_]: Something]: Something[F] =\n    implicitly[Something[F]]\n\n  implicit def something[F[_]: EffectConstructor]: Something[F] =\n    new SomethingF[F]\n\n  final class SomethingF[F[_]: EffectConstructor]\n    extends Something[F] {\n\n    def get[A](a: => A): F[A] =\n      EffectConstructor[F].effectOf(a)\n  }\n}\n\nimport scalaz.effect._\n\nval get1 = Something[IO].get(1)\n// get1: IO[Int] = scalaz.effect.IO$$anon$7@268815a5\n\nget1.unsafePerformIO()\n// res1: Int = 1\n")),Object(o.b)("p",null,"If you feel it's too cumbersome to repeat ",Object(o.b)("inlineCode",{parentName:"p"},"EffectConstructor[F].effectOf()"),", consider using ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#effectful"}),"Effectful")),Object(o.b)("h2",{id:"effectful"},"Effectful"),Object(o.b)("p",null,"If you're sick of repeating ",Object(o.b)("inlineCode",{parentName:"p"},"EffectConstructor[F].effectOf()")," and looking for more convenient ways?, use ",Object(o.b)("inlineCode",{parentName:"p"},"Effectful")," instead."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-scala"}),"import effectie.Effectful._\nimport effectie.scalaz._\n\ntrait Something[F[_]] {\n  def get[A](a: => A): F[A]\n}\n\nobject Something {\n  def apply[F[_]: Something]: Something[F] =\n    implicitly[Something[F]]\n\n  implicit def something[F[_]: EffectConstructor]: Something[F] =\n    new SomethingF[F]\n\n  final class SomethingF[F[_]: EffectConstructor]\n    extends Something[F] {\n\n    def get[A](a: => A): F[A] =\n      effectOf(a)\n      // No more EffectConstructor[F].effectOf(a)\n  }\n}\n\nimport scalaz.effect._\n\nval get1 = Something[IO].get(1)\n// get1: IO[Int] = scalaz.effect.IO$$anon$7@e4fb45e\n\nget1.unsafePerformIO()\n// res3: Int = 1\n")))}u.isMDXComponent=!0},159:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),c=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=c.a.createContext({}),u=function(e){var t=c.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):f(f({},t),e)),n},s=function(e){var t=u(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},m=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,b=s["".concat(a,".").concat(m)]||s[m]||p[m]||o;return n?c.a.createElement(b,f(f({ref:t},l),{},{components:n})):c.a.createElement(b,f({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var f={};for(var i in t)hasOwnProperty.call(t,i)&&(f[i]=t[i]);f.originalType=e,f.mdxType="string"==typeof e?e:r,a[1]=f;for(var l=2;l<o;l++)a[l]=n[l];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);