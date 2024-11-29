// Function.
import {
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
  isUndefined,
} from '../lib';
// Type.
import { IsNot } from '../not/interface/is-not.interface';
/**
 * Export: Interface.
 * Object with prefixed `is` functions.
 */
export interface Is {
  /**
   * Checks if any value is of the type obtained from its object class equal to `'array'` or an `object` type and passes the test of
   * `Array.isArray()` method.
   */
  array: typeof isArray;

  /**
   * Checks if any value is a `bigint` type.
   */
  bigint: typeof isBigInt;

  /**
   * Checks if any value is a `boolean` type, or the obtained type from its object class equal to `'boolean'`, or an `object` type and an
   * instance of `Boolean` that is equal to `true` or `false`.
   */
  boolean: typeof isBoolean;

  /**
   * Checks if any value is of the type obtained from its object class equal to `'boolean'` or an `object` type, and an instance of
   * `Boolean` and equal `true` or `false`.
   */
  booleanObject: typeof isBooleanObject;

  /**
   * Checks if any value is a `boolean` type equal to `true` or `false`.
   */
  booleanType: typeof isBooleanType;

  /**
   * Checks if any value is a `function` type or the type obtained from its object class equal to `'function'` and an instance of
   * `Function`.
   */
  class: typeof isClass;

  /**
   * Checks if any value is of the type obtained from its object class equal to `'date'` or an `object` type, and an instance of
   * `Date`.
   */
  date: typeof isDate; // From 4.2.0

  /**
   * Checks if any value is not an `undefined` type and is not equal to `undefined`.
   */
  defined: typeof isDefined;

  /**
   * Checks if any value is a `boolean` type or an instance of `Boolean` by using `isBoolean()` function, that is equal to `false`.
   */
  false: typeof isFalse; // From `4.2.0`

  /**
   * Checks if any value is a `function` type or the type obtained from its object class equal to `'function'` and an instance of
   * `Function`.
   */
  function: typeof isFunction;

  /**
   * Checks if any value is an instance of a given `constructor`.
   */
  instance: typeof isInstance;

  /**
   * Checks if any value is one of the `string`, `number`, or `symbol` type.
   */
  key: typeof isKey;

  /**
   * Property of an object consists of `isNot` prefixed functions.
   */
  not: IsNot;

  /**
   * Checks if any value is of the type obtained from its object class equal to `'null'` or an `object` type that is equal to `null`.
   */
  null: typeof isNull;

  /**
   * Checks if any value is a `number` type, or the type obtained from its `Object.prototype` equal to `'number'` or an `object` type
   * and an instance of `Number`.
   */
  number: typeof isNumber;

  /**
   * Checks if any value is a `number` type or an instance of `Number` by using `isNumber()` between a specified range.
   */
  numberBetween: typeof isNumberBetween; // From `4.2.0`

  /**
   * Checks if any value is of the type obtained from its object class equal to `'number'`, or an `object` type and an instance of `Number`
   * and **finite** by using the `Number.isFinite()` method and is **valid** by using the `Number.isNaN()` method.
   */
  numberObject: typeof isNumberObject;

  /**
   * Checks if any value is a `number` type and finite by using the `Number.isFinite()` method and valid by the `Number.isNaN()` method.
   */
  numberType: typeof isNumberType;

  /**
   * Checks if any value is an `object` type or the type obtained from its `Object.prototype` equal to `'object'`, and an instance of
   * `Object`.
   */
  object: typeof isObject;

  /**
   * Checks if any value is an `object` by using the `isObject()` function with its key of the `PropertyKey` type.
   */
  objectKey: typeof isObjectKey;

  /**
   * Checks if any value is an `object` by using the `isObject()` function with a key of the `PropertyKey` in it(or its prototype chain) by
   * using the `in` operator.
   */
  objectKeyIn: typeof isObjectKeyIn;

  /**
   * Checks if any value is an `object`(by using the `isObject()`) with its keys by using `hasOwnProperty()` method of `Object`.
   */
  objectKeys: typeof isObjectKeys;

  /**
   * Checks if any value is an `object` by using the `isObject()` function with keys of the `PropertyKey` in it(or its prototype chain) by
   * using the `in` operator.
   */
  objectKeysIn: typeof isObjectKeysIn;

  /**
   * Checks if any value is an `object` by using the `isObject()` function with some of its keys or some groups of its keys of the
   * `PropertyKey` type.
   */
  objectSomeKeys: typeof isObjectSomeKeys;

  /**
   * Checks if any value is of the generic type `Primitive` or specific type from a given `type` of the generic type `Primitives`.
   */
  primitive: typeof isPrimitive;

  /**
   * Checks if any value is a regular expression of the type obtained from its object class equal to `'regexp'`, or an `object` type,
   * and an instance of `RegExp`.
   */
  regexp: typeof isRegExp; // From 4.2.0

  /**
   * Checks if any value is a `string` type by using the `isStringType()` function or an instance of `String` by using the
   * `isStringObject()` function.
   */
  string: typeof isString;

  /**
   * Checks if any `value` is a `string` type and it's not an instance of `Object` and `String` or it's an `object` type, and an instance
   * of `String` and `Object` that includes all of the specified words.
   */
  stringIncludes: typeof isStringIncludes;

  /**
   * Checks if any value is a `string` type or an instance of `String` by using `isString()` that includes some of the specified
   * words/sentences.
   */
  stringIncludesSome: typeof isStringIncludesSome;

  /**
   * Checks if any value is a `string` type or an instance of `String`(by using `isString()`) of a specified length.
   */
  stringLength: typeof isStringLength;

  /**
   * Checks if any value is a `string` type or an instance of `String` by using `isString()` of length within the specified range.
   */
  stringLengthBetween: typeof isStringLengthBetween;

  /**
   * Checks if any value is of the type obtained from its `Object.prototype` equal to `'string'` or an `object` type, and an instance of
   * `String`.
   */
  stringObject: typeof isStringObject;

  /**
   * Checks if any value is a `string` type.
   */
  stringType: typeof isStringType;

  /**
   * Checks if any `value` is a `symbol` type.
   */
  symbol: typeof isSymbol;

  /**
   * Checks if any value is a `boolean` type or an instance of `Boolean`(by using the `isBoolean()`) equal to `true`.
   */
  true: typeof isTrue; // From 4.2.0

  /**
   * Checks if any value is the type from a given `type` of the generic type `Types`.
   */
  type: typeof isType;

  /**
   * Checks if any value is an `undefined` type.
   */
  undefined: typeof isUndefined;
}
