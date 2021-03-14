import { TypeOrmModule } from "@nestjs/typeorm";
import { ConnectionOptions } from "node:tls";
import { Configuration } from "../config/config.keys";
import { ConfigService } from "../config/config.service";
import { ConfigModule } from "../config/config.module";

export const databaseProviders = [
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject:[ConfigService],
    async useFactory(config: ConfigService){
      return {
        // ssl: true,
        type: 'postgres' as 'postgres',
        host: config.get(Configuration.HOST),
        username: config.get(Configuration.USERNAME),
        port: 5444,
        database: config.get(Configuration.DATABASE),
        password: config.get(Configuration.PASSWORD),
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        migrations: [__dirname + '/migrations/*{.ts,.js}']
      } as ConnectionOptions
    }
  })
]