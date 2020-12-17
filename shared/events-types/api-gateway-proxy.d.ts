interface QueryStringParameters {
  [key: string]: string;
}

interface MultiValueQueryStringParameters {
  [key: string]: string[];
}

interface PathParameters {
  [key: string]: string;
}

interface StageVariables {
  [key: string]: string;
}

interface Headers {
  Accept?: string;
  'Accept-Encoding'?: string;
  'Accept-Language'?: string;
  'Cache-Control'?: string;
  'CloudFront-Forwarded-Proto'?: string;
  'CloudFront-Is-Desktop-Viewer'?: string;
  'CloudFront-Is-Mobile-Viewer'?: string;
  'CloudFront-Is-SmartTV-Viewer'?: string;
  'CloudFront-Is-Tablet-Viewer'?: string;
  'CloudFront-Viewer-Country'?: string;
  Host?: string;
  'Upgrade-Insecure-Requests'?: string;
  'User-Agent'?: string;
  Via?: string;
  'X-Amz-Cf-Id'?: string;
  'X-Forwarded-For'?: string;
  'X-Forwarded-Port'?: string;
  'X-Forwarded-Proto'?: string;
  [key: string]: string;
}

interface MultiValueHeaders {
  Accept?: string[];
  'Accept-Encoding'?: string[];
  'Accept-Language'?: string[];
  'Cache-Control'?: string[];
  'CloudFront-Forwarded-Proto'?: string[];
  'CloudFront-Is-Desktop-Viewer'?: string[];
  'CloudFront-Is-Mobile-Viewer'?: string[];
  'CloudFront-Is-SmartTV-Viewer'?: string[];
  'CloudFront-Is-Tablet-Viewer'?: string[];
  'CloudFront-Viewer-Country'?: string[];
  Host?: string[];
  'Upgrade-Insecure-Requests'?: string[];
  'User-Agent'?: string[];
  Via?: string[];
  'X-Amz-Cf-Id'?: string[];
  'X-Forwarded-For'?: string[];
  'X-Forwarded-Port'?: string[];
  'X-Forwarded-Proto'?: string[];
  [key: string]: string[];
}

interface Identity {
  cognitoIdentityPoolId?: string;
  accountId?: string;
  cognitoIdentityId?: string;
  caller?: string;
  accessKey?: string;
  sourceIp: string;
  cognitoAuthenticationType?: any;
  cognitoAuthenticationProvider?: any;
  userArn?: string;
  userAgent: string;
  user?: any;
}

interface RequestContext {
  accountId: string;
  resourceId: string;
  stage: string;
  requestId: string;
  requestTime: string;
  requestTimeEpoch: number;
  identity: Identity;
  path: string;
  resourcePath: string;
  httpMethod: string;
  apiId: string;
  protocol: string;
}

export interface ApiGatewayProxy {
  body: string;
  resource: string;
  path: string;
  httpMethod: string;
  isBase64Encoded: boolean;
  queryStringParameters: QueryStringParameters;
  multiValueQueryStringParameters: MultiValueQueryStringParameters;
  pathParameters: PathParameters;
  stageVariables: StageVariables;
  headers: Headers;
  multiValueHeaders: MultiValueHeaders;
  requestContext: RequestContext;
}
