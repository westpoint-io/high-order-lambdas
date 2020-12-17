interface Arguments {
  id: string;
}

interface Claims {
  sub: string;
  email_verified: boolean;
  iss: string;
  phone_number_verified: boolean;
  'cognito:username': string;
  aud: string;
  event_id: string;
  token_use: string;
  auth_time: number;
  phone_number: string;
  exp: number;
  iat: number;
  email: string;
}

interface Identity {
  claims: Claims;
  defaultAuthStrategy: string;
  groups?: any;
  issuer: string;
  sourceIp: string[];
  sub: string;
  username: string;
}

interface Headers {
  'x-forwarded-for'?: string;
  'cloudfront-viewer-country'?: string;
  'cloudfront-is-tablet-viewer'?: string;
  via?: string;
  'cloudfront-forwarded-proto'?: string;
  origin?: string;
  'content-length'?: string;
  'accept-language'?: string;
  host?: string;
  'x-forwarded-proto'?: string;
  'user-agent'?: string;
  accept?: string;
  'cloudfront-is-mobile-viewer'?: string;
  'cloudfront-is-smarttv-viewer'?: string;
  'accept-encoding'?: string;
  referer?: string;
  'content-type'?: string;
  'sec-fetch-mode'?: string;
  'x-amz-cf-id'?: string;
  'x-amzn-trace-id'?: string;
  authorization?: string;
  'sec-fetch-dest'?: string;
  'x-amz-user-agent'?: string;
  'cloudfront-is-desktop-viewer'?: string;
  'sec-fetch-site'?: string;
  'x-forwarded-port'?: string;
}

interface Request {
  headers: Headers;
}

interface Variables {
  [key: string]: any;
}

interface Info {
  selectionSetList: string[];
  selectionSetGraphQL: string;
  parentTypeName: string;
  fieldName: string;
  variables: Variables;
}

interface Stash {
  [key: string]: string;
}

export interface AppSyncResolver {
  arguments: Arguments;
  identity: Identity;
  source?: any;
  request: Request;
  prev?: any;
  info: Info;
  stash: Stash;
}
