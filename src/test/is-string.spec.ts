// Function.
import { isString } from '../lib/is-string.func';
// Testing.
import {
  // Main.
  Testing,

  // Constant.
  TESTING_BIGINT,
  TESTING_CLASS,
  TESTING_FALSE,
  TESTING_FALSE_INSTANCE,
  TESTING_FUNCTION,
  TESTING_NULL,
  TESTING_NUMBER,
  TESTING_NUMBER_CONSTRUCTOR,
  TESTING_NUMBER_INSTANCE,
  TESTING_OBJECT,
  TESTING_STRING,
  TESTING_STRING_CONSTRUCTOR,
  TESTING_STRING_INSTANCE,
  TESTING_SYMBOL_NUMBER,
  TESTING_SYMBOL_STRING,
  TESTING_TRUE,
  TESTING_TRUE_INSTANCE,
  TESTING_UNDEFINED,

  // Class.
  TestingClass,
} from '@angular-package/testing';
// Execute tests.
import { tests } from '../execute-tests';
/**
 * Initialize testing.
 */
const t = new Testing(
  tests.is.string.describe,
  tests.is.string.it
);
/**
 * Tests.
 */
t.describe(isString.name, () => {
  t
    // Defined.
    .it('is DEFINED', () => expect(isString).toBeDefined())

    // Checks ...
    .describe(`checks`, () => {
      t
        .it('callback', () => {
          isString(TESTING_STRING, (result, value, payload) => {
            expect(result).toBeTrue();
            if (payload) {
              expect(value).toEqual(TESTING_STRING);
            }
            return result;
          });
        })
        // ... arrays.
        // // .describe(`array`, () => {}); // TODO:  // TODO:
        // ... function.
        .describe(`function`, () => {
          t
            .it(`TESTING_FUNCTION`, () => expect(isString(TESTING_FUNCTION)).toBeFalse())
            .it(`TestingClass`, () => expect(isString(TestingClass)).toBeFalse());
        })
        // ... objects.
        .describe('object', () => {
          t
            .it(`TESTING_CLASS`, () => expect(isString(TESTING_CLASS)).toBeFalse())
            .it(`TESTING_OBJECT`, () => expect(isString(TESTING_OBJECT)).toBeFalse())
            .it(`new Object(OBJECT_ONE_NEW})`, () => expect(isString(TESTING_OBJECT)).toBeFalse());
        })
        // ... primitives.
        .describe(`primitive`, () => {
          t
            // bigint
            .describe(`bigint`, () => t.it(`${TESTING_BIGINT}`, () => expect(isString(TESTING_BIGINT)).toBeFalse()))
            // boolean
            .describe(`boolean`, () => {
              t
                .it(`${TESTING_TRUE}`, () => expect(isString(TESTING_TRUE)).toBeFalse())
                .it(`${TESTING_FALSE}`, () => expect(isString(TESTING_FALSE)).toBeFalse());
            })
            // null
            .it(`${TESTING_NULL}`, () => expect(isString(TESTING_NULL)).toBeFalse())
            // number
            .describe(`number`, () => {
              t
                .it(`${TESTING_NUMBER}`, () => expect(isString(TESTING_NUMBER)).toBeFalse())
                .it(`Number(${TESTING_NUMBER})`, () => expect(isString(TESTING_NUMBER_CONSTRUCTOR)).toBeFalse());
            })
            // string
            .describe(`string`, () => {
              t
                .it(`${TESTING_STRING}`, () => expect(isString(TESTING_STRING)).toBeTrue())
                .it(`String(${TESTING_STRING})`, () => expect(isString(TESTING_STRING_CONSTRUCTOR)).toBeTrue());
            })
            // symbol
            .describe(`symbol`, () => {
              t
                .it(`Symbol(${TESTING_NUMBER})`, () => expect(isString(TESTING_SYMBOL_NUMBER)).toBeFalse())
                .it(`Symbol(${TESTING_STRING})`, () => expect(isString(TESTING_SYMBOL_STRING)).toBeFalse());
            })
            // undefined
            .it(`${TESTING_UNDEFINED}`, () => expect(isString(TESTING_UNDEFINED)).toBeFalse())
            // ... object.
            .describe(`object`, () => {
              t
                // BigInt
                .describe(`BigInt`, () => t.it(`${TESTING_BIGINT}`, () => expect(isString(TESTING_BIGINT)).toBeFalse()))
                // Boolean
                .describe(`Boolean`, () => {
                  t
                    .it(`${TESTING_TRUE_INSTANCE}`, () => expect(isString(TESTING_TRUE_INSTANCE)).toBeFalse())
                    .it(`${TESTING_FALSE_INSTANCE}`, () => expect(isString(TESTING_FALSE_INSTANCE)).toBeFalse());
                })
                // Number
                .describe(`Number`, () =>
                  t.it(`new Number(${TESTING_NUMBER})`, () => expect(isString(TESTING_NUMBER_INSTANCE)).toBeFalse()))
                // String
                .describe(`String`, () =>
                  t.it(`new String(${TESTING_STRING})`, () => expect(isString(TESTING_STRING_INSTANCE)).toBeTrue()));
            });
        });
    });
});
