package effectie.monix

import effectie.monix.Effectful._

trait Effectful {

  def effectOf[F[_]]: CurriedEffectOf[F] = new CurriedEffectOf[F]

  def pureOf[F[_]]: CurriedEffectOfPure[F] = new CurriedEffectOfPure[F]

  def unitOf[F[_]: Eft]: F[Unit] = Eft[F].unitOf

}

@SuppressWarnings(Array("org.wartremover.warts.DefaultArguments"))
object Effectful extends Effectful {

  private[Effectful] final class CurriedEffectOf[F[_]](
    private val dummy: Boolean = true
  ) extends AnyVal {
    def apply[A](a: => A)(implicit EF: Eft[F]): F[A] =
      Eft[F].effectOf(a)
  }

  private[Effectful] final class CurriedEffectOfPure[F[_]](
    private val dummy: Boolean = true
  ) extends AnyVal {
    def apply[A](a: A)(implicit EF: Eft[F]): F[A] =
      Eft[F].pureOf(a)
  }

}
