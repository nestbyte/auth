import { Module } from '@nestjs/common';
import { CoreModule } from '@nestbyte/core';

@Module({
  imports: [CoreModule],
  controllers: [],
  providers: [],
})
export class AuthModule {}
