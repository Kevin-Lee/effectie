package effectie

import scala.util.control.ControlThrowable

/**
 * @author Kevin Lee
 * @since 2020-07-31
 */
class SomeControlThrowable(val message: String) extends ControlThrowable(message)
