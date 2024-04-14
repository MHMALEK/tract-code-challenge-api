import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MockDataModule } from './mock-data/mock-data.module';
import { NotificationsModule } from './notifications/notifications.module';
import { LiveDataModule } from './live-data/live-data.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MockDataModule,
    NotificationsModule,
    LiveDataModule,
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {
  static globalPrefix: string;
  static port: number | string;
  constructor(private readonly _configService: ConfigService) {
    const prefix = this._configService.get('PREFIX');
    const port = this._configService.get('PORT');
    const version = this._configService.get('VERSION');
    AppModule.globalPrefix = `${prefix}/${version}`;
    AppModule.port = this._configService.get('PORT');
  }
}
