import { rest } from 'msw';
import { setupWorker, SetupWorkerApi } from 'msw';
import { handlers } from './server-handlers';

const worker: SetupWorkerApi = setupWorker(...handlers);
export { worker, rest };
