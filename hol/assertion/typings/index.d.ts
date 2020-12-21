import { LambdaContext } from "./lambda-context";

export interface AssertionContext extends LambdaContext {
  assert: Chai.Assert;
  expect: Chai.ExpectStatic;
}
