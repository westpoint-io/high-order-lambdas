export class Assert {
  static envHas(envs: string[], message: string) {
    if (!envs.every((env) => Object.keys(Deno.env.toObject()).includes(env))) {
      throw {
        code: 500,
        message: message || 'Required environment variable not provided',
      };
    }
  }
}
