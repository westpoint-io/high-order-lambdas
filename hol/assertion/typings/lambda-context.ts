export interface LambdaContext {
  callbackWaitsForEmptyEventLoop?: boolean;
  functionName?: string;
  functionVersion?: string;
  invokedFunctionArn?: string;
  memoryLimitInMB?: string;
  awsRequestId?: string;
  logGroupName?: string;
  logStreamName?: string;
  identity?: CognitoIdentity;
  clientContext?: ClientContext;

  getRemainingTimeInMillis?(): number;
}

interface CognitoIdentity {
  cognitoIdentityId: string;
  cognitoIdentityPoolId: string;
}

interface ClientContext {
  client: ClientContextClient;
  Custom?: any;
  env: ClientContextEnv;
}

interface ClientContextClient {
  installationId: string;
  appTitle: string;
  appVersionName: string;
  appVersionCode: string;
  appPackageName: string;
}

interface ClientContextEnv {
  platformVersion: string;
  platform: string;
  make: string;
  model: string;
  locale: string;
}