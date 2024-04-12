import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MockDataModule } from './mock-data/mock-data.module';
import { NotificationsModule } from './notifications/notifications.module';
import { LiveDataModule } from './live-data/live-data.module';

@Module({
  imports: [MockDataModule, NotificationsModule, LiveDataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
