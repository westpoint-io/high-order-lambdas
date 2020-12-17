import { withAssertion } from '../../../hol/assertion';

const handler = (event, context) => {
  const { TABLE_NAME, MY_ENV } = process.env;

  if (!TABLE_NAME || !MY_ENV) {
    return {
      status: 500,
      message: 'Env variables not defined',
    };
  }
};

exports.handler = handler;
