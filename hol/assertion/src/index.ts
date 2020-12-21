import { AssertionContext } from '../typings';
import { assert, expect } from 'chai';

export const withAssertion = (
  handler: (event: any, context: AssertionContext, ...rest: any[]) => any
) => {
  return (event: any, context: AssertionContext, ...rest: any[]) => {
    try {
      context.assert = assert;
      context.expect = expect;

      return handler(event, context, ...rest);
    } catch (error) {
      return {
        status: 500,
        message: error.message,
      };
    }
  };
};
