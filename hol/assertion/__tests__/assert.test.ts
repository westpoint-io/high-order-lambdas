import { withAssertion } from '../src/index.ts';
import { AssertionContext } from '../typings/index.ts';
import { assertEquals } from 'https://deno.land/std@0.82.0/testing/asserts.ts';

const lambda = async (event: any, context: AssertionContext) => {
  context.assert.envHas(['MY_ENV']);

  return true;
};

Deno.test(`Lambda doesn't contains env`, async () => {
  const handler = withAssertion(lambda);
  const lambdaResult = await handler(null, {} as any);

  assertEquals(lambdaResult.status, 500);
  assertEquals(
    lambdaResult.message,
    'Required environment variable not provided'
  );
});

Deno.test('Lambda contains env', async () => {
  const handler = withAssertion(lambda);
  Deno.env.set('MY_ENV', '');
  const lambdaResult = await handler(null, {} as any);

  assertEquals(lambdaResult, true);
});
