package effectie.cats

import cats.Id
import cats.effect.{ContextShift, IO}

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

  implicit def fromFutureToIo(implicit cs: ContextShift[IO]): FromFuture[IO] =
    new FromFuture[IO] {
      override def toEffect[A](future: => Future[A]): IO[A] =
        IO.fromFuture[A](IO(future))
    }

  implicit val fromFutureToFuture: FromFuture[Future] =
    new FromFuture[Future] {
      override def toEffect[A](future: => Future[A]): Future[A] =
        future
    }

  final case class FromFutureToIdTimeout(fromFutureToIdTimeout: Duration)

  implicit def fromFutureToId(implicit timeout: FromFutureToIdTimeout): FromFuture[Id] =
    new FromFuture[Id] {
      override def toEffect[A](future: => Future[A]): Id[A] =
        Await.result[A](future, timeout.fromFutureToIdTimeout)
    }

}
