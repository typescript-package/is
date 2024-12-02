/*
 * Public API Surface of is
 */
export {
  // `is` object.
  is,

  // `is` functions.
  isArray,
  isBigInt,
  isBoolean,
  isBooleanObject,
  isBooleanType,
  isClass,
  isDate,
  isDefined,
  isFalse,
  isFunction,
  isInstance,
  isKey,
  isNull,
  isNumber,
  isNumberBetween,
  isNumberObject,
  isNumberType,
  isObject,
  isObjectKey,
  isObjectKeyIn,
  isObjectKeys,
  isObjectKeysIn,
  isObjectSomeKeys,
  isParam,
  isPrimitive,
  isRegExp,
  isString,
  isStringIncludes,
  isStringIncludesSome,
  isStringLength,
  isStringLengthBetween,
  isStringObject,
  isStringType,
  isSymbol,
  isTrue,
  isType,
  isUndefined
} from './lib';
export {
  // `isNot` object.
  isNot,

  // All `isNot` functions.
  isNotBoolean,
  isNotDefined,
  isNotFunction,
  isNotNull,
  isNotNumber,
  isNotString,
  isNotUndefined
} from './not';
