import { LambdaContext } from "./lambda-context.ts";

export interface IAssert {
  envHas(envs: string[], message?: string): void;
}
export interface AssertionContext extends LambdaContext {
  assert: IAssert;
}
