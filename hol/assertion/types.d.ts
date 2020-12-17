import { LambdaContext } from '../../shared/lambda-context';

type EnvHasOptions = {
  /**
   * Should the lambda fail if assertion results in false
   * @default true
   */
  fail: boolean;
};

export interface IAssert {
  envHas(envs: string[], message?: string, options?: EnvHasOptions): boolean;
}

export interface AssertionContext extends LambdaContext {
  assertion: IAssert;
}
