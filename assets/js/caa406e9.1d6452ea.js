(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[110],{3905:function(n,e,r){"use strict";r.d(e,{Zo:function(){return p},kt:function(){return f}});var t=r(7294);function a(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function o(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function i(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function l(n,e){if(null==n)return{};var r,t,a=function(n,e){if(null==n)return{};var r,t,a={},o=Object.keys(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||(a[r]=n[r]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(a[r]=n[r])}return a}var c=t.createContext({}),u=function(n){var e=t.useContext(c),r=e;return n&&(r="function"==typeof n?n(e):i(i({},e),n)),r},p=function(n){var e=u(n.components);return t.createElement(c.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},s=t.forwardRef((function(n,e){var r=n.components,a=n.mdxType,o=n.originalType,c=n.parentName,p=l(n,["components","mdxType","originalType","parentName"]),s=u(r),f=a,m=s["".concat(c,".").concat(f)]||s[f]||d[f]||o;return r?t.createElement(m,i(i({ref:e},p),{},{components:r})):t.createElement(m,i({ref:e},p))}));function f(n,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=r.length,i=new Array(o);i[0]=s;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=n,l.mdxType="string"==typeof n?n:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}s.displayName="MDXCreateElement"},6246:function(n,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return s}});var t=r(2122),a=r(9756),o=(r(7294),r(3905)),i=["components"],l={id:"can-handle-error",title:"CanHandleError"},c=void 0,u={unversionedId:"monix/can-handle-error",id:"monix/can-handle-error",isDocsHomePage:!1,title:"CanHandleError",description:"CanHandleError",source:"@site/../generated-docs/target/mdoc/monix/can-handle-error.md",sourceDirName:"monix",slug:"/monix/can-handle-error",permalink:"/docs/monix/can-handle-error",version:"current",frontMatter:{id:"can-handle-error",title:"CanHandleError"},sidebar:"someSidebar",previous:{title:"CanCatch",permalink:"/docs/monix/can-catch"},next:{title:"FromFuture",permalink:"/docs/monix/from-future"}},p=[{value:"CanHandleError",id:"canhandleerror",children:[]},{value:"CanHandleError.handleNonFatal",id:"canhandleerrorhandlenonfatal",children:[]}],d={toc:p};function s(n){var e=n.components,r=(0,a.Z)(n,i);return(0,o.kt)("wrapper",(0,t.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"canhandleerror"},"CanHandleError"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"CanHandleError")," is a typeclass to handle ",(0,o.kt)("inlineCode",{parentName:"p"},"NonFatal")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Throwable")," and to recover from it.\nIt looks like this."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"trait CanHandleError[F[_]] {\n\n  def handleNonFatalWith[A, AA >: A](\n      fa: => F[A]\n    )(\n      handleError: Throwable => F[AA]\n    ): F[AA]\n\n  def handleEitherTNonFatalWith[A, AA >: A, B, BB >: B](\n      efab: => EitherT[F, A, B]\n    )(\n      handleError: Throwable => F[Either[AA, BB]]\n    ): EitherT[F, AA, BB]\n\n  def handleNonFatal[A, AA >: A](\n      fa: => F[A]\n    )(\n      handleError: Throwable => AA\n    ): F[AA]\n\n  def handleEitherTNonFatal[A, AA >: A, B, BB >: B](\n      efab: => EitherT[F, A, B]\n    )(\n      handleError: Throwable => Either[AA, BB]\n    ): EitherT[F, AA, BB]\n\n}\n")),(0,o.kt)("p",null,"There are instances available for ",(0,o.kt)("inlineCode",{parentName:"p"},"monix.eval.Task"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"scala.concurrent.Future")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"cats.Id"),"."),(0,o.kt)("h2",{id:"canhandleerrorhandlenonfatal"},"CanHandleError.handleNonFatal"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import cats._\nimport monix.eval._\n\nimport effectie.monix._\nimport effectie.monix.Effectful._\n\nimport scala.util.control.NonFatal\n\nclass InvalidNumberException(n: Int, message: String) extends RuntimeException(message)\n\ndef foo(n: Int): Int = \n  if (n < 0)\n    throw new InvalidNumberException(n, s"n cannot be a negative Int. n: $n") \n  else\n     n\n\ndef bar[F[_]: EffectConstructor: CanHandleError](n: Int): F[Int] =\n  CanHandleError[F].handleNonFatalWith(effectOf(foo(n))) {\n    case NonFatal(err) =>\n      pureOf(0)\n  }\n  \nimport monix.execution.Scheduler.Implicits.global\n  \nprintln(bar[Task](1).runSyncUnsafe())\n// 1\nprintln(bar[Task](-1).runSyncUnsafe())\n// 0\n \nprintln(bar[Id](1))\n// 1\nprintln(bar[Id](-1))\n// 0\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import effectie.monix._\nimport effectie.monix.Effectful._\n\nimport scala.util.control.NonFatal\n\nimport effectie.concurrent.ExecutorServiceOps\nimport java.util.concurrent.{ExecutorService, Executors}\nimport scala.concurrent.{ExecutionContext, Future, Await}\nimport scala.concurrent.duration._\n\nobject MyApp {\n    \n  class InvalidNumberException(n: Int, message: String) extends RuntimeException(message)\n  \n  def foo(n: Int): Int = \n    if (n < 0)\n      throw new InvalidNumberException(n, s"n cannot be a negative Int. n: $n") \n    else\n       n\n  \n  def bar[F[_]: EffectConstructor: CanHandleError](n: Int): F[Int] =\n    CanHandleError[F].handleNonFatalWith(effectOf(foo(n))) {\n      case NonFatal(err) =>\n        pureOf(0)\n    }\n\n  def main(args: Array[String]): Unit = {\n    \n    val executorService: ExecutorService =\n      Executors.newWorkStealingPool(Runtime.getRuntime.availableProcessors() >> 1)\n    implicit val ec: ExecutionContext = ExecutionContext.fromExecutorService(executorService)\n    \n    try {\n      println(Await.result(bar[Future](1), 1.second))\n      println(Await.result(bar[Future](-1), 1.second))\n    } finally {\n      ExecutorServiceOps.shutdownAndAwaitTermination(executorService, 1.second)\n    }\n  }\n}\n\nMyApp.main(Array.empty)\n// 1\n// 0\n')))}s.isMDXComponent=!0}}]);