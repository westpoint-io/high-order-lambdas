import { AssertionContext } from "../typings/index.ts";
import { Assert } from "./assert.ts";

export const withAssertion = (
  handler: (event: any, context: AssertionContext, ...rest: any[]) => any,
) => {
  return async (event: any, context: AssertionContext, ...rest: any[]) => {
    try {
      context.assert = Assert;

      return await handler(event, context, ...rest);
    } catch (error) {
      return {
        status: error.code || 500,
        message: error.message,
      };
    }
  };
};
