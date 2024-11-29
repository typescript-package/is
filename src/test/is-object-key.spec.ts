// Function.
import { isObjectKey } from '../lib/is-object-key.func';
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
  TESTING_NUMBER_INSTANCE,
  TESTING_OBJECT,
  TESTING_STRING,
  TESTING_STRING_INSTANCE,
  TESTING_SYMBOL_NUMBER,
  TESTING_SYMBOL_STRING,
  TESTING_TRUE,
  TESTING_TRUE_INSTANCE,
  TESTING_UNDEFINED,

  // Class.
  TestingClass,
} from '@angular-package/testing';
import { tests } from '../execute-tests';
/**
 * Initialize testing.
 */
const t = new Testing(
  tests.is.objectKey.describe,
  tests.is.objectKey.it
);
/**
 * Tests.
 */
t.describe(isObjectKey.name , () => {
  t
    // Defined.
    .it('is DEFINED', () => expect(isObjectKey).toBeDefined())

    // Checks ...
    .describe(`checks`, () => {
      t
        .it('callback', () => {
          isObjectKey(TESTING_CLASS, 'firstName', (result, value, payload) => {
            expect(result).toBeTrue();
            if (payload) {
              expect(value).toEqual(TESTING_CLASS);
              expect(payload.key).toEqual('firstName');
            }
            return result;
          });
        })
        // ... instance.
        .describe(`instance`, () => {
          t
            .describe(`TESTING_CLASS`, () => {
              t
                // number.
                .it('has number key', () => {
                  expect(isObjectKey(TESTING_CLASS, 1030405027)).toBeTrue();
                  expect(isObjectKey(TESTING_CLASS, 5)).toBeTrue();
                })
                // It doesn't find getter number
                .it('has not find getter number', () => expect(isObjectKey(TESTING_CLASS, TESTING_NUMBER)).toBeFalse())
                // string.
                .it('has string key', () => {
                  expect(isObjectKey(TESTING_CLASS, 'surname')).toBeTrue();
                })
                // symbol.
                .it('has not find getter symbol key', () => {
                  // It does not find getter symbol key in class
                  expect(isObjectKey(TESTING_CLASS, TESTING_SYMBOL_NUMBER)).toBeFalse();
                  expect(isObjectKey(TESTING_CLASS, TESTING_SYMBOL_STRING)).toBeFalse();
                });
            });
        })
        // ... function.
        .describe(`function`, () => {
          t
            .it(`TESTING_FUNCTION`, () => expect(isObjectKey(TESTING_FUNCTION, 'function')).toBeFalse())
            .it(`TESTING_CLASS`, () => expect(isObjectKey(TestingClass, 'function')).toBeFalse());
        })
        // ... objects.
        .describe('object', () => {
          t
            .describe(`TESTING_OBJECT`, () => {
              t
                // number.
                .it('has number key', () => {
                  expect(isObjectKey(TESTING_OBJECT, 1030405027)).toBeTrue();
                  expect(isObjectKey(TESTING_OBJECT, 5)).toBeTrue();
                  expect(isObjectKey(TESTING_OBJECT, TESTING_NUMBER)).toBeTrue(); // It doesn't find getter
                })
                // string.
                .it('has string key', () => {
                  expect(isObjectKey(TESTING_OBJECT, 'key as string')).toBeTrue();
                  expect(isObjectKey(TESTING_OBJECT, 'x')).toBeTrue();
                  expect(isObjectKey(TESTING_OBJECT, TESTING_STRING)).toBeTrue();
                })
                // symbol.
                .it('has symbol key', () => {
                  expect(isObjectKey(TESTING_OBJECT, TESTING_SYMBOL_NUMBER)).toBeTrue();
                  expect(isObjectKey(TESTING_OBJECT, TESTING_SYMBOL_STRING)).toBeTrue();
                });
            });
        })
        // ... primitives.
        .describe(`primitive`, () => {
          t
            // bigint
            .describe(`bigint`, () => it(`${TESTING_BIGINT}`, () => expect(isObjectKey(TESTING_BIGINT, 'bigint')).toBeFalse()))
            // boolean
            .describe(`boolean`, () => {
              t
                .it(`${TESTING_TRUE}`, () => expect(isObjectKey(TESTING_TRUE, 'boolean')).toBeFalse())
                .it(`${TESTING_FALSE}`, () => expect(isObjectKey(TESTING_FALSE, 'boolean')).toBeFalse());
            })
            // null
            .it(`${TESTING_NULL}`, () => expect(isObjectKey(TESTING_NULL, 'null')).toBeFalse())
            // number
            .describe(`number`, () => {
              t
                .it(`${TESTING_NUMBER}`, () => expect(isObjectKey(TESTING_NUMBER, 'number')).toBeFalse())
                .it(`Number(${TESTING_NUMBER})`, () => expect(isObjectKey(TESTING_NUMBER_INSTANCE, 'number')).toBeFalse());
            })
            // string
            .describe(`string`, () => {
              t
                .it(`${TESTING_STRING}`, () => expect(isObjectKey(TESTING_STRING, 'string')).toBeFalse())
                .it(`String(${TESTING_STRING})`, () => expect(isObjectKey(TESTING_STRING_INSTANCE, 'string')).toBeFalse());
            })
            // symbol
            .describe(`symbol`, () => {
              t
                .it(`Symbol(${TESTING_NUMBER})`, () => expect(isObjectKey(TESTING_SYMBOL_NUMBER, 'symbol')).toBeFalse())
                .it(`Symbol(${TESTING_STRING})`, () => expect(isObjectKey(TESTING_SYMBOL_STRING, 'symbol')).toBeFalse());
            })
            // undefined
            .it(`${TESTING_UNDEFINED}`, () => expect(isObjectKey(TESTING_UNDEFINED, 'undefined')).toBeFalse())
            // ... object.
            .describe(`object`, () => {
              t
                // BigInt
                .describe(`BigInt`, () =>
                  t.it(`${TESTING_BIGINT}`, () => expect(isObjectKey(TESTING_BIGINT, 'bigint')).toBeFalse()))
                // Boolean
                .describe(`Boolean`, () => {
                  t
                    .it(`${TESTING_TRUE_INSTANCE}`, () => expect(isObjectKey(TESTING_TRUE_INSTANCE, 'boolean')).toBeFalse())
                    .it(`${TESTING_FALSE_INSTANCE}`, () => expect(isObjectKey(TESTING_FALSE_INSTANCE, 'boolean')).toBeFalse());
                })
                // Number
                .describe(`Number`, () =>
                  t.it(`new Number(${TESTING_NUMBER})`, () => expect(isObjectKey(TESTING_NUMBER_INSTANCE, 'number')).toBeFalse()))
                // String
                .describe(`String`, () =>
                  t.it(`new String(${TESTING_STRING})`, () => expect(isObjectKey(TESTING_STRING_INSTANCE, 'string')).toBeFalse()));
            });
        });
    });
});
