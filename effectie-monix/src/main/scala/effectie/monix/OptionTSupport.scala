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

  def optionTNone[F[_]: EffectConstructor, A]: OptionT[F, A] =
    OptionT[F, A](EffectConstructor[F].pureOf(none[A]))

  def optionTSomeF[F[_]: Functor, A](fa: F[A]): OptionT[F, A] =
    OptionT.liftF[F, A](fa)

}

object OptionTSupport extends OptionTSupport {

  private[OptionTSupport] final class PartiallyAppliedOptionTOf[F[_]] {
    def apply[A](a: => Option[A])(implicit EF: EffectConstructor[F]): OptionT[F, A] =
      OptionT(EffectConstructor[F].effectOf(a))
  }

  private[OptionTSupport] final class PartiallyAppliedOptionTOfPure[F[_]] {
    def apply[A](a: Option[A])(implicit EF: EffectConstructor[F]): OptionT[F, A] =
      OptionT(EffectConstructor[F].pureOf(a))
  }

  private[OptionTSupport] final class PartiallyAppliedOptionTSome[F[_]] {
    def apply[A](a: => A)(implicit EC: EffectConstructor[F], FT: Functor[F]): OptionT[F, A] =
      OptionT.liftF(EC.effectOf(a))
  }

  private[OptionTSupport] final class PartiallyAppliedOptionTSomePure[F[_]] {
    def apply[A](a: A)(implicit EC: EffectConstructor[F], FT: Functor[F]): OptionT[F, A] =
      OptionT.liftF(EC.pureOf(a))
  }

}
