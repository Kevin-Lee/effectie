package effectie.monix


import cats.Functor
import cats.data.OptionT
import cats.syntax.all._

trait OptionTSupport {

  import OptionTSupport._

  def optionTOf[F[_]]: PartiallyAppliedOptionTOf[F] =
    new PartiallyAppliedOptionTOf[F]

  def optionTOfPure[F[_]]: PartiallyAppliedOptionTOfPure[F] =
    new PartiallyAppliedOptionTOfPure[F]

  def optionTSome[F[_]]: PartiallyAppliedOptionTSome[F] =
    new PartiallyAppliedOptionTSome[F]

  def optionTSomePure[F[_]]: PartiallyAppliedOptionTSomePure[F] =
    new PartiallyAppliedOptionTSomePure[F]

  def optionTNone[F[_]: Eft, A]: OptionT[F, A] =
    OptionT[F, A](Eft[F].pureOf(none[A]))

  def optionTSomeF[F[_]: Functor, A](fa: F[A]): OptionT[F, A] =
    OptionT.liftF[F, A](fa)

}

@SuppressWarnings(Array("org.wartremover.warts.DefaultArguments"))
object OptionTSupport extends OptionTSupport {

  private[OptionTSupport] final class PartiallyAppliedOptionTOf[F[_]](
    private val dummy: Boolean = true
  ) extends AnyVal {
    def apply[A](a: => Option[A])(implicit EF: Eft[F]): OptionT[F, A] =
      OptionT(Eft[F].effectOf(a))
  }

  private[OptionTSupport] final class PartiallyAppliedOptionTOfPure[F[_]](
    private val dummy: Boolean = true
  ) extends AnyVal {
    def apply[A](a: Option[A])(implicit EF: Eft[F]): OptionT[F, A] =
      OptionT(Eft[F].pureOf(a))
  }

  private[OptionTSupport] final class PartiallyAppliedOptionTSome[F[_]](
    private val dummy: Boolean = true
  ) extends AnyVal {
    def apply[A](a: => A)(implicit EC: Eft[F], FT: Functor[F]): OptionT[F, A] =
      OptionT.liftF(EC.effectOf(a))
  }

  private[OptionTSupport] final class PartiallyAppliedOptionTSomePure[F[_]](
    private val dummy: Boolean = true
  ) extends AnyVal {
    def apply[A](a: A)(implicit EC: Eft[F], FT: Functor[F]): OptionT[F, A] =
      OptionT.liftF(EC.pureOf(a))
  }

}
