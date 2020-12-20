import { withAssertion } from '../../../hol/assertion';

describe('Assertion hol', () => {
  describe('EnvHas', () => {
    describe('When no env is provided', () => {
      const handlerThatThrows = withAssertion((event, context) => {
        const assert = context.assert;
        assert.containsAllKeys(
          process.env,
          ['TABLE_NAME', 'MY_ENV'],
          'Required environment variable not provided'
        );
      });
      it('Should return an error when env is not present', () => {
        const result = handlerThatThrows(null, {} as any);
        expect(result.status).toEqual(500);
        expect(result.message).toMatch(
          'Required environment variable not provided'
        );
      });
    });
    describe('When env is provided', () => {
      beforeAll(() => {
        process.env.MY_ENV = 'MY_ENV_VALUE';
        process.env.TABLE_NAME = 'MY_TABLE_NAME';
      });
      afterAll(() => {
        process.env.MY_ENV = undefined;
        process.env.TABLE_NAME = undefined;
      });

      const handler = withAssertion((event, context) => {
        const assert = context.assert;

        assert.containsAllKeys(
          process.env,
          ['TABLE_NAME', 'MY_ENV'],
          'Required environment variable not provided'
        );

        return 'works';
      });
      it('Should not return an error when env is not present', () => {
        const result = handler(null, {} as any);

        expect(result).toEqual('works');
      });
    });
  });
});
