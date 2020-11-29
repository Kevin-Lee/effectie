---
id: can-handle-error
title: "CanHandleError - Cats"
---

## CanHandleError

`CanHandleError` is a typeclass to handle `NonFatal` `Throwable` and to recover from it.
It looks like this.

```scala
trait CanHandleError[F[_]] {

  def handleNonFatalWith[A, AA >: A](
      fa: => F[A]
    )(
      handleError: Throwable => F[AA]
    ): F[AA]

  def handleEitherTNonFatalWith[A, AA >: A, B, BB >: B](
      efab: => EitherT[F, A, B]
    )(
      handleError: Throwable => F[Either[AA, BB]]
    ): EitherT[F, AA, BB]

  def handleNonFatal[A, AA >: A](
      fa: => F[A]
    )(
      handleError: Throwable => AA
    ): F[AA]

  def handleEitherTNonFatal[A, AA >: A, B, BB >: B](
      efab: => EitherT[F, A, B]
    )(
      handleError: Throwable => Either[AA, BB]
    ): EitherT[F, AA, BB]

}
```

There are instances available for `cats.effect.IO`, `scala.concurrent.Future` and `cats.Id`.

## CanHandleError.handleNonFatal
```scala mdoc:reset-object
import cats._
import cats.effect._

import effectie.cats._
import effectie.cats.Effectful._

import scala.util.control.NonFatal

class InvalidNumberException(n: Int, message: String) extends RuntimeException(message)

def foo(n: Int): Int = 
  if (n < 0)
    throw new InvalidNumberException(n, s"n cannot be a negative Int. n: $n") 
  else
     n

def bar[F[_]: EffectConstructor: CanHandleError](n: Int): F[Int] =
  CanHandleError[F].handleNonFatalWith(effectOf(foo(n))) {
    case NonFatal(err) =>
      pureOf(0)
  }
  
println(bar[IO](1).unsafeRunSync())
println(bar[IO](-1).unsafeRunSync())
 
println(bar[Id](1))
println(bar[Id](-1))
```
```scala mdoc:reset-object
import effectie.cats._
import effectie.cats.Effectful._

import scala.util.control.NonFatal

import effectie.concurrent.ExecutorServiceOps
import java.util.concurrent.{ExecutorService, Executors}
import scala.concurrent.{ExecutionContext, Future, Await}
import scala.concurrent.duration._

object MyApp {
    
  class InvalidNumberException(n: Int, message: String) extends RuntimeException(message)
  
  def foo(n: Int): Int = 
    if (n < 0)
      throw new InvalidNumberException(n, s"n cannot be a negative Int. n: $n") 
    else
       n
  
  def bar[F[_]: EffectConstructor: CanHandleError](n: Int): F[Int] =
    CanHandleError[F].handleNonFatalWith(effectOf(foo(n))) {
      case NonFatal(err) =>
        pureOf(0)
    }

  def main(args: Array[String]): Unit = {
    
    val executorService: ExecutorService =
      Executors.newWorkStealingPool(Runtime.getRuntime.availableProcessors() >> 1)
    implicit val ec: ExecutionContext = ExecutionContext.fromExecutorService(executorService)
    
    try {
      println(Await.result(bar[Future](1), 1.second))
      println(Await.result(bar[Future](-1), 1.second))
    } finally {
      ExecutorServiceOps.shutdownAndAwaitTermination(executorService, 1.second)
    }
  }
}

MyApp.main(Array.empty)
```