import { withAssertion } from '../../../hol/assertion';

describe('Assertion hol', () => {
  describe('EnvHas', () => {
    describe('When no env is provided', () => {
      const handlerThatThrows = withAssertion((event, context) => {
        const assert = context.assertion;
        assert.envHas(['TABLE_NAME', 'MY_ENV'], '');
      });
      it('Should throw an error when env is not present', () => {
        expect(() => handlerThatThrows(null, {} as any)).toThrow(
          'Required environment variable not provided'
        );
      });
    });
  });
});
