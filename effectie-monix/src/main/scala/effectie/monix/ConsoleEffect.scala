package effectie.monix


import cats._
import cats.syntax.all._
import effectie.ConsoleEffect.ConsoleEffectWithoutFlatMap
import effectie.YesNo

trait ConsoleEffect[F[_]] extends effectie.ConsoleEffect[F]

object ConsoleEffect {
  def apply[F[_]: ConsoleEffect]: ConsoleEffect[F] =
    implicitly[ConsoleEffect[F]]

  implicit def consoleEffectF[F[_]: Eft: FlatMap]
    : ConsoleEffect[F] =
    new ConsoleEffectF[F]

  final class ConsoleEffectF[F[_]: Eft: FlatMap]
    extends ConsoleEffectWithoutFlatMap[F]
      with ConsoleEffect[F] {

    @SuppressWarnings(Array("org.wartremover.warts.Recursion"))
    override def readYesNo(prompt: String): F[YesNo] = for {
      _ <- putStrLn(prompt)
      answer <- readLn
      yesOrN <-  answer match {
        case "y" | "Y" =>
          Eft[F].effectOf(YesNo.yes)
        case "n" | "N" =>
          Eft[F].effectOf(YesNo.no)
        case _ =>
          readYesNo(prompt)
      }
    } yield yesOrN

  }
}