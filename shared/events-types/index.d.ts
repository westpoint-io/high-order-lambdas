import { ApiGatewayProxy } from './api-gateway-proxy';
import { AppSyncResolver } from './app-sync-resolver';

type LambdaEvent = AppSyncResolver | ApiGatewayProxy | undefined | null;

export default LambdaEvent;
