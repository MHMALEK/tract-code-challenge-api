import { Module } from '@nestjs/common';
import { MockDataService } from './mock-data.service';
import { MockDataController } from './mock-data.controller';

@Module({
  providers: [MockDataService],
  controllers: [MockDataController]
})
export class MockDataModule {}
