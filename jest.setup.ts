import '@testing-library/jest-dom';
import 'whatwg-fetch';
import { server } from '__tests__/test-utils/server';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
