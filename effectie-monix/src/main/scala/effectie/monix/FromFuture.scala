package effectie.monix


import cats.Id
import monix.eval.Task

import scala.concurrent.duration.Duration
import scala.concurrent.{Await, Future}

/**
 * @author Kevin Lee
 * @since 2020-09-22
 */
trait FromFuture[F[_]] {
  def toEffect[A](future: => Future[A]): F[A]
}

object FromFuture {

  def apply[F[_]: FromFuture]: FromFuture[F] = implicitly[FromFuture[F]]

  @SuppressWarnings(Array("org.wartremover.warts.ImplicitParameter"))
  implicit def fromFutureToTask: FromFuture[Task] =
    new FromFuture[Task] {
      override def toEffect[A](future: => Future[A]): Task[A] =
        Task.fromFuture[A](future)
    }

  implicit val fromFutureToFuture: FromFuture[Future] =
    new FromFuture[Future] {
      override def toEffect[A](future: => Future[A]): Future[A] =
        future
    }

  final case class FromFutureToIdTimeout(fromFutureToIdTimeout: Duration)

  @SuppressWarnings(Array("org.wartremover.warts.ImplicitParameter"))
  implicit def fromFutureToId(implicit timeout: FromFutureToIdTimeout): FromFuture[Id] =
    new FromFuture[Id] {
      override def toEffect[A](future: => Future[A]): Id[A] =
        Await.result[A](future, timeout.fromFutureToIdTimeout)
    }

}
