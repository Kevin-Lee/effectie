---
layout: docs
title: "OptionTSupport"
---

## OptionTSupport

```scala mdoc:reset-object
import scalaz._
import Scalaz._

import effectie.scalaz.Effectful._
import effectie.scalaz._
import effectie.scalaz.OptionTSupport._

trait Something[F[_]] {
  def foo(a: Int): F[Option[Int]]
  def bar(a: Option[Int]): F[Option[Int]]
}

object Something {
  def apply[F[_]: Something]: Something[F] =
    implicitly[Something[F]]

  implicit def something[F[_]: EffectConstructor: Monad]: Something[F] =
    new SomethingF[F]

  final class SomethingF[F[_]: EffectConstructor: Monad]
    extends Something[F] {

    def foo(a: Int): F[Option[Int]] = (for {
      x <- optionTSomePure(a) // == OptionT.liftF(pureOf(a))
      y <- optionTSome(x + 10) // == OptionT.liftF(effectOf(x + 10))
      z <- optionTSomeF(effectOf(y + 100)) // == OptionT.lieftF(effectOf(y + 100))
    } yield z).run

    def bar(a: Option[Int]): F[Option[Int]] = (for {
      x <- optionTOfPure(a) // == OptionT(pureOf(a: Option[Int]))
      y <- optionTOf((x + 999).some)  // == OptionT(effectOf((x + 999).some))
    } yield y).run
  }

}

import scalaz.effect._

Something[IO].foo(1).unsafePerformIO()
Something[IO].foo(10).unsafePerformIO()

Something[IO].bar(1.some).unsafePerformIO()
Something[IO].bar(none[Int]).unsafePerformIO()

```
