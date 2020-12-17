import LambdaEvent from '../../shared/events-types';
import { Assert } from './assertion';
import { AssertionContext } from './types';

export const withAssertion = (
  handler: (
    event: LambdaEvent,
    context: AssertionContext,
    ...rest: any[]
  ) => any
) => {
  return (event: LambdaEvent, context: AssertionContext, ...rest: any[]) => {
    context.assertion = Assert;
    return handler(event, context, ...rest);
  };
};
