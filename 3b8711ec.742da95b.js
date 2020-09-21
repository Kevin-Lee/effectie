(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{60:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return f})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(2),c=n(6),o=(n(0),n(78)),f={id:"effect-constructor",title:"EffectConstructor - Cats"},a={unversionedId:"cats-effect/effect-constructor",id:"cats-effect/effect-constructor",isDocsHomePage:!1,title:"EffectConstructor - Cats",description:"EffectConstructor",source:"@site/../generated-docs/target/mdoc/cats-effect/effect-constructor.md",slug:"/cats-effect/effect-constructor",permalink:"/docs/cats-effect/effect-constructor",version:"current",sidebar:"someSidebar",previous:{title:"For Cats Effect",permalink:"/docs/cats-effect/cats-effect"},next:{title:"CanCatch - Cats",permalink:"/docs/cats-effect/can-catch"}},i=[{value:"EffectConstructor",id:"effectconstructor",children:[]},{value:"Effectful",id:"effectful",children:[]}],u={rightToc:i};function s(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"effectconstructor"},"EffectConstructor"),Object(o.b)("p",null,"If you use Cats Effect and write tagless final code, and look for a generic way to construct ",Object(o.b)("inlineCode",{parentName:"p"},"F[A]"),", ",Object(o.b)("inlineCode",{parentName:"p"},"EffectConstructor")," can help you."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-scala"}),"import effectie.cats._\n\ntrait Something[F[_]] {\n  def get[A](a: => A): F[A]\n}\n\nobject Something {\n  def apply[F[_]: Something]: Something[F] =\n    implicitly[Something[F]]\n\n  implicit def something[F[_]: EffectConstructor]: Something[F] =\n    new SomethingF[F]\n\n  final class SomethingF[F[_]: EffectConstructor]\n    extends Something[F] {\n\n    def get[A](a: => A): F[A] =\n      EffectConstructor[F].effectOf(a)\n  }\n}\n\nimport cats.effect._\n\nval get1 = Something[IO].get(1)\n// get1: IO[Int] = Delay(<function0>)\n\nget1.unsafeRunSync()\n// res1: Int = 1\n")),Object(o.b)("p",null,"If you feel it's too cumbersome to repeat ",Object(o.b)("inlineCode",{parentName:"p"},"EffectConstructor[F].effectOf()"),", consider using ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#effectful"}),"Effectful")),Object(o.b)("h2",{id:"effectful"},"Effectful"),Object(o.b)("p",null,"If you're sick of repeating ",Object(o.b)("inlineCode",{parentName:"p"},"EffectConstructor[F].effectOf()")," and looking for more convenient ways?, use ",Object(o.b)("inlineCode",{parentName:"p"},"Effectful")," instead."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-scala"}),"import effectie.Effectful._\nimport effectie.cats._\n\ntrait Something[F[_]] {\n  def get[A](a: => A): F[A]\n}\n\nobject Something {\n  def apply[F[_]: Something]: Something[F] =\n    implicitly[Something[F]]\n\n  implicit def something[F[_]: EffectConstructor]: Something[F] =\n    new SomethingF[F]\n\n  final class SomethingF[F[_]: EffectConstructor]\n    extends Something[F] {\n\n    def get[A](a: => A): F[A] =\n      effectOf(a)\n      // No more EffectConstructor[F].effectOf(a)\n  }\n}\n\nimport cats.effect._\n\nval get1 = Something[IO].get(1)\n// get1: IO[Int] = Delay(<function0>)\n\nget1.unsafeRunSync()\n// res3: Int = 1\n")))}s.isMDXComponent=!0},78:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),c=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var u=c.a.createContext({}),s=function(e){var t=c.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return c.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},m=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,f=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=s(n),m=r,b=l["".concat(f,".").concat(m)]||l[m]||p[m]||o;return n?c.a.createElement(b,a(a({ref:t},u),{},{components:n})):c.a.createElement(b,a({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,f=new Array(o);f[0]=m;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:r,f[1]=a;for(var u=2;u<o;u++)f[u]=n[u];return c.a.createElement.apply(null,f)}return c.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);