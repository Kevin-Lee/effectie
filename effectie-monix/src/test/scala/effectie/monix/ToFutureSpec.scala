package effectie.monix


import cats._

import effectie.ConcurrentSupport

import hedgehog._
import hedgehog.runner._

import monix.eval.Task
import monix.execution.Scheduler

import java.util.concurrent.ExecutorService
import scala.concurrent.Future
import scala.concurrent.duration._

/**
 * @author Kevin Lee
 * @since 2020-09-23
 */
object ToFutureSpec extends Properties {
  override def tests: List[Test] = List(
    property(
      "test ToFuture[Task].unsafeToFuture",
      IoSpec.testUnsafeToFuture
    ),
    property(
      "test ToFuture[Future].unsafeToFuture",
      FutureSpec.testUnsafeToFuture
    ),
    property(
      "test ToFuture[Id].unsafeToFuture",
      IdSpec.testUnsafeToFuture
    )
  )

  object IoSpec {
    @SuppressWarnings(Array("org.wartremover.warts.IsInstanceOf"))
    def testUnsafeToFuture: Property = for {
      a <- Gen.int(Range.linear(Int.MinValue, Int.MaxValue)).log("a")
    } yield {
      val fa = Task(a)

      implicit val es: ExecutorService = ConcurrentSupport.newExecutorService()
      @SuppressWarnings(Array("org.wartremover.warts.ExplicitImplicitTypes"))
      implicit val ec = ConcurrentSupport.newExecutionContextWithLogger(es, println(_))
      implicit val scheduler: Scheduler = Scheduler(ec)

      ConcurrentSupport.runAndShutdown(es, 300.milliseconds) {
        val expected = Future(a)
        val future = ToFuture[Task].unsafeToFuture(fa)
        val actual = ConcurrentSupport.futureToValueAndTerminate(future, 300.milliseconds)

        Result.all(
          List(
            Result.assert(future.isInstanceOf[Future[Int]])
              .log(s"future is not an instance of Future[Int]. future.getClass: ${future.getClass.toString}"),
            actual ==== ConcurrentSupport.futureToValueAndTerminate(expected, 300.milliseconds),
            actual ==== a
          )
        )
      }
    }

  }

  object FutureSpec {
    @SuppressWarnings(Array("org.wartremover.warts.IsInstanceOf"))
    def testUnsafeToFuture: Property = for {
      a <- Gen.int(Range.linear(Int.MinValue, Int.MaxValue)).log("a")
    } yield {
      implicit val es: ExecutorService = ConcurrentSupport.newExecutorService()
      @SuppressWarnings(Array("org.wartremover.warts.ExplicitImplicitTypes"))
      implicit val ec = ConcurrentSupport.newExecutionContextWithLogger(es, println(_))
      ConcurrentSupport.runAndShutdown(es, 300.milliseconds) {
        val expected = Future(a)
        val fa = Future(a)

        val future = ToFuture[Future].unsafeToFuture(fa)
        val actual = ConcurrentSupport.futureToValueAndTerminate(future, 300.milliseconds)

        Result.all(
          List(
            Result.assert(future.isInstanceOf[Future[Int]])
              .log(s"future is not an instance of Future[Int]. future.getClass: ${future.getClass.toString}"),
            actual ==== ConcurrentSupport.futureToValueAndTerminate(expected, 300.milliseconds),
            actual ==== a
          )
        )
      }
    }

  }

  object IdSpec {
    @SuppressWarnings(Array("org.wartremover.warts.IsInstanceOf"))
    def testUnsafeToFuture: Property = for {
      a <- Gen.int(Range.linear(Int.MinValue, Int.MaxValue)).log("a")
    } yield {
      implicit val es: ExecutorService = ConcurrentSupport.newExecutorService()

      val fa = a
      @SuppressWarnings(Array("org.wartremover.warts.ExplicitImplicitTypes"))
      implicit val ec = ConcurrentSupport.newExecutionContextWithLogger(es, println(_))
      ConcurrentSupport.runAndShutdown(es, 300.milliseconds) {
        val expected = Future(a)

        val future = ToFuture[Id].unsafeToFuture(fa)
        val actual = ConcurrentSupport.futureToValueAndTerminate(future, 300.milliseconds)

        Result.all(
          List(
            Result.assert(future.isInstanceOf[Future[Int]])
              .log(s"future is not an instance of Future[Int]. future.getClass: ${future.getClass.toString}"),
            actual ==== ConcurrentSupport.futureToValueAndTerminate(expected, 300.milliseconds),
            actual ==== a
          )
        )
      }
    }
  }

}
