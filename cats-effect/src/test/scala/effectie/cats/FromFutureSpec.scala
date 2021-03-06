package effectie.cats

import cats.Id
import cats.effect._
import effectie.ConcurrentSupport
import effectie.cats.compat.{CatsEffectIoCompat, CatsEffectIoCompatForFuture}
import hedgehog._
import hedgehog.runner._

import java.util.concurrent.ExecutorService
import scala.concurrent.duration._
import scala.concurrent.{ExecutionContext, Future}

/**
 * @author Kevin Lee
 * @since 2020-09-22
 */
object FromFutureSpec extends Properties {
  override def tests: List[Test] = List(
    property("test FromFuture[IO].toEffect", IoSpec.testToEffect),
    property("test FromFuture[Future].toEffect", FutureSpec.testToEffect),
    property("test FromFuture[Id].toEffect", IdSpec.testToEffect)
  )

  object IoSpec extends CatsEffectIoCompat {
    def testToEffect: Property = for {
      a <- Gen.int(Range.linear(Int.MinValue, Int.MaxValue)).log("a")
    } yield {
      val compat = new CatsEffectIoCompatForFuture
      import compat._

      ConcurrentSupport.runAndShutdown(es, 300.milliseconds) {
        lazy val fa = Future(a)
        val actual = FromFuture[IO].toEffect(fa).unsafeRunSync()

        actual ==== a
      }
    }
  }

  object FutureSpec {
    def testToEffect: Property = for {
      a <- Gen.int(Range.linear(Int.MinValue, Int.MaxValue)).log("a")
    } yield {
      implicit val es: ExecutorService = ConcurrentSupport.newExecutorService()
      implicit val ec: ExecutionContext = ConcurrentSupport.newExecutionContextWithLogger(es, println(_))

      ConcurrentSupport.runAndShutdown(es, 300.milliseconds) {
        lazy val fa = Future(a)
        val actual = ConcurrentSupport.futureToValueAndTerminate(FromFuture[Future].toEffect(fa), 300.milliseconds)

        actual ==== a
      }
    }
  }

  object IdSpec {
    def testToEffect: Property = for {
      a <- Gen.int(Range.linear(Int.MinValue, Int.MaxValue)).log("a")
    } yield {
      val es = ConcurrentSupport.newExecutorService()
      implicit val ec: ExecutionContext = ConcurrentSupport.newExecutionContextWithLogger(es, println(_))

      ConcurrentSupport.runAndShutdown(es, 300.milliseconds) {
        implicit val timeout: FromFuture.FromFutureToIdTimeout =
          FromFuture.FromFutureToIdTimeout(300.milliseconds)
        lazy val fa = Future(a)
        val actual = FromFuture[Id].toEffect(fa)

        actual ==== a
      }
    }
  }

}
