// Function.
import { isObject } from '../lib/is-object.func';
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
  tests.is.object.describe,
  tests.is.object.it
);
/**
 * Checks
 * ✓ typeof === 'object'
 * ✓ instanceof Object
 */
t.describe(isObject.name, () => {
  t
    // Defined.
    .it('is DEFINED', () => expect(isObject).toBeDefined())

    // Checks ...
    .describe(`checks`, () => {
      t
        .it('callback', () => {
          isObject(TESTING_OBJECT, (result, value, payload) => {
            expect(result).toBeTrue();
            if (payload) {
              expect(value).toEqual(TESTING_OBJECT);
            }
            return result;
          });
        })

        // ... arrays.
        // .describe(`array`, () => {}); // TODO: 
        // ... function.
        .describe(`function`, () => {
          t
            .it(`TESTING_FUNCTION`, () => expect(isObject(TESTING_FUNCTION)).toBeFalse())
            .it(`TestingClass`, () => expect(isObject(TestingClass)).toBeFalse());
        })
        // ... objects.
        .describe('object', () => {
          t
            .it(`TESTING_CLASS`, () => expect(isObject(TESTING_CLASS)).toBeTrue())
            .it(`TESTING_OBJECT`, () => expect(isObject(TESTING_OBJECT)).toBeTrue())
            .it(`new Object(OBJECT_ONE_NEW})`, () => expect(isObject(TESTING_OBJECT)).toBeTrue())
        })
        // ... primitives.
        .describe(`primitive`, () => {
          t
            // bigint
            .describe(`bigint`, () => t.it(`${TESTING_BIGINT}`, () => expect(isObject(TESTING_BIGINT)).toBeFalse()))

            // boolean
            .describe(`boolean`, () => {
              t
                .it(`${TESTING_TRUE}`, () => expect(isObject(TESTING_TRUE)).toBeFalse())
                .it(`${TESTING_FALSE}`, () => expect(isObject(TESTING_FALSE)).toBeFalse());
            })

            // null
            .it(`${TESTING_NULL}`, () => expect(isObject(TESTING_NULL)).toBeFalse())

            // number
            .describe(`number`, () => {
              t
                .it(`${TESTING_NUMBER}`, () => expect(isObject(TESTING_NUMBER)).toBeFalse())
                .it(`Number(${TESTING_NUMBER})`, () => expect(isObject(TESTING_NUMBER_CONSTRUCTOR)).toBeFalse());
            })
            // string
            .describe(`string`, () => {
              t
                .it(`${TESTING_STRING}`, () => expect(isObject(TESTING_STRING)).toBeFalse())
                .it(`String(${TESTING_STRING})`, () => expect(isObject(TESTING_STRING_CONSTRUCTOR)).toBeFalse());
            })
            // symbol
            .describe(`symbol`, () => {
              t
                .it(`Symbol(${TESTING_NUMBER})`, () => expect(isObject(TESTING_SYMBOL_NUMBER)).toBeFalse())
                .it(`Symbol(${TESTING_STRING})`, () => expect(isObject(TESTING_SYMBOL_STRING)).toBeFalse());
            })
            // undefined
            .it(`${TESTING_UNDEFINED}`, () => expect(isObject(TESTING_UNDEFINED)).toBeFalse())
            // ... object.
            .describe(`object`, () => {
              t
                // BigInt
                .describe(`BigInt`, () => t.it(`${TESTING_BIGINT}`, () => expect(isObject(TESTING_BIGINT)).toBeFalse()))
                // Boolean
                // .describe(`Boolean`, () => {
                //   t
                //     .it(`${TESTING_TRUE_INSTANCE}`, () => expect(isObject(TESTING_TRUE_INSTANCE)).toBeTrue())
                //     .it(`${TESTING_FALSE_INSTANCE}`, () => expect(isObject(TESTING_FALSE_INSTANCE)).toBeTrue());
                // })
                // Number
                // .describe(`Number`, () =>
                //   t.it(`new Number(${TESTING_NUMBER})`, () => expect(isObject(TESTING_NUMBER_INSTANCE)).toBeTrue()))
                // String
                // .describe(`String`, () => t.it(`new String(${TESTING_STRING})`, () => expect(isObject(TESTING_STRING_INSTANCE)).toBeTrue()));
            });
        });
    });
});
