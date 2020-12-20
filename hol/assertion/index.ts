import LambdaEvent from '../../shared/events-types';
import { AssertionContext } from './types';
import { assert, expect } from 'chai';

export const withAssertion = (
  handler: (
    event: LambdaEvent,
    context: AssertionContext,
    ...rest: any[]
  ) => any
) => {
  return (event: LambdaEvent, context: AssertionContext, ...rest: any[]) => {
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
