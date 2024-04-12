import { Module } from '@nestjs/common';
import { LiveDataService } from './live-data.service';

@Module({
  providers: [LiveDataService]
})
export class LiveDataModule {}
