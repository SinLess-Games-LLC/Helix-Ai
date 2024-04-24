import 'dotenv/config'
import { Options } from '@mikro-orm/core'
import { TsMorphMetadataProvider } from '@mikro-orm/reflection'
import { Migrator } from '@mikro-orm/migrations'
import { EntityGenerator } from '@mikro-orm/entity-generator'
import { SeedManager } from '@mikro-orm/seeder'

import { HelixConfiguration } from '@helix/helix-utilities'
import { entities } from './index'

const config = new HelixConfiguration()

export default {
  driver: config.database.mysql.driver,
  dbName: config.database.mysql.database.name,
  host: config.database.mysql.net.host,
  port: config.database.mysql.net.port,
  user: config.database.mysql.user.username,
  password: config.database.mysql.user.password,
  metadataProvider: TsMorphMetadataProvider,
  metadataCache: { pretty: true },
  entities,
  migrations: {
    path: './libs/entities/src/migrations',
  },
  discovery: {
    warnWhenNoEntities: false, // by default, discovery throws when no entity is processed
    requireEntitiesArray: true, // force usage of class references in `entities` instead of paths
    alwaysAnalyseProperties: false, // do not analyse properties when not needed (with ts-morph)
  },
  extensions: [Migrator, EntityGenerator, SeedManager],
} as Options
