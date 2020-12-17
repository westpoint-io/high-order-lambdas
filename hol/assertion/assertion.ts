import { EnvHasOptions } from './types';

const defaultOptions: EnvHasOptions = {
  fail: true,
};

export class Assert {
  static envHas(
    envs: string[],
    message: string,
    options: EnvHasOptions = defaultOptions
  ) {
    if (!envs.every((env) => Object.keys(process.env).includes(env))) {
      if (options?.fail)
        throw Error(message || 'Required environment variable not provided');
      return false;
    }
    return true;
  }
}
