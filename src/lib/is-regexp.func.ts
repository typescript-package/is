// Function.
import { resultCallback } from '@typescript-package/core';
import { typeOf } from '@typescript-package/core';
// Type.
import { ResultCallback } from '@typescript-package/type';
/**
 * Checks if any value is a regular expression of the type obtained from its object class equal to `'regexp'`, or an `object` type,
 * and an instance of `RegExp`.
 * @param value The value of any type to check.
 * @param callback A callback `function` of `ResultCallback` type with parameters, the `value` that has been checked, the `result` of this
 * check, and `payload` of generic type variable `Payload` with optional properties from the provided `payload`, to handle them before
 * the `result` return. By default, it uses `resultCallback()` function.
 * @param payload An optional `object` of the generic type variable `Payload` is assigned to the `payload` of the given `callback` function.
 * @returns The return value is a `boolean` indicating whether the provided `value` is a regular expression.
 * @typescript-package
 */
export const isRegExp = <Payload extends object>(
  value: any,
  callback: ResultCallback<any, Payload> = resultCallback,
  payload?: Payload
): value is RegExp =>
  callback(
    (typeOf(value) === 'regexp' || typeof value === 'object') &&
      value instanceof RegExp,
    value,
    payload
  );
