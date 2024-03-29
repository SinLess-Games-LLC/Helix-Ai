import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TrpcModule, TrpcService } from '@helix/trpc'
import { AuthModule } from './auth/auth.module'
import { MicroserviceModule } from './microservice/microservice.module'
import { NewsModule } from './news/news.module'
import { TechnologyModule } from './technology/technology.module'
import { UserModule } from './user/user.module'
import { UserProfileModule } from './user-profile/user-profile.module'
import { UserSettingsModule } from './user-settings/user-settings.module'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { HelixConfiguration } from '@helix/helix-utilities'
import { UserService } from './user/user.service'
import { entities } from '@helix/entities'
import { HealthModule } from './health/health.module'
import { DatabaseModule } from './database/database.module'

const config = new HelixConfiguration()

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: config.database.mysql.net.host,
      port: config.database.mysql.net.port,
      username: config.database.mysql.user.username,
      password: config.database.mysql.user.password,
      database: config.database.mysql.database.name,
      autoLoadEntities: true,
      synchronize: true,
      cache: {
        duration: 30000, // 30 seconds
        tableName: 'helix-orm-cache',
      },
      metadataTableName: 'helix-orm-metadata',
    }),
    TypeOrmModule.forFeature(entities),
    TrpcModule,
    AuthModule,
    DatabaseModule,
    HealthModule,
    MicroserviceModule,
    NewsModule,
    TechnologyModule,
    UserModule,
    UserProfileModule,
    UserSettingsModule,
  ],
  controllers: [AppController],
  providers: [AppService, TrpcService, UserService],
})
export class AppModule {}
