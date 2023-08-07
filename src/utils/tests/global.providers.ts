import { Provider } from '@nestjs/common';
import { CONNECTION_STRING } from '@nestbyte/orm';

export const GlobalProviders: Provider[] = [
  {
    provide: CONNECTION_STRING,
    useValue: 'test_connection_string',
  },
];
