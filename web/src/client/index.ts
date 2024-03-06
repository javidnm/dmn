import { ApiError, Fetcher, Middleware } from 'openapi-typescript-fetch';
import { paths } from './types';
import { useSession , useUser} from '@/hooks/use-user';
import { Toast } from '@/components/ui/toast';
import { toast } from '@/components/ui/use-toast';

export const fetcher = Fetcher.for<paths>();

const middleware: Middleware = async (url, init, next) => {
  const sessionId = useSession.getState().sessionId;
  // Create an instance of AbortController
  const abortController = new AbortController();
  const abortSignal = abortController.signal;
  // Attach the abort signal to the request
  init.signal = abortSignal;
  if (sessionId) {
    init.headers.append('authorization', `Bearer ${sessionId}`);
  }
  console.log(sessionId, 'asdsad');
  try {
    return await next(url, init);
  } catch (err: unknown) {
    catchError(err);
    throw err;
  }
};
export const baseUrl = 'http://localhost:3008';
fetcher.configure({
  baseUrl: baseUrl,
  use: [middleware],
});

export * from './types';

function catchError(err: unknown) {
  if (err instanceof ApiError) {
    switch (err.status) {
      case 401: {
        useUser.getState().logoutUser();
        break;
      }
      default:
        toast({
          variant: 'destructive',
          title: 'Error',
          description: err?.data?.message || err.message || 'somthing went wrong',
        });
        break;
    }
    return;
  }
  const error = err as Error;
  toast({
    variant: 'destructive',
    title: error.name,
    description: error.message,
  });
}