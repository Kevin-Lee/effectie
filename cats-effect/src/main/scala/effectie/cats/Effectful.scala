package effectie.cats

import effectie.cats.Effectful._

trait Effectful {

  def effectOf[F[_]]: CurriedEffectOf[F] = new CurriedEffectOf[F]

  def pureOf[F[_]]: CurriedEffectOfPure[F] = new CurriedEffectOfPure[F]

  @deprecated(message = "Use pureOf instead.", since = "1.4.0")
  @inline def effectOfPure[F[_]]: CurriedEffectOfPure[F] = pureOf[F]

  def unitOf[F[_]: Eft]: F[Unit] = Eft[F].unitOf

  @deprecated(message = "Use unitOf instead", since = "1.4.0")
  @inline def effectOfUnit[F[_]: Eft]: F[Unit] = unitOf[F]

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
