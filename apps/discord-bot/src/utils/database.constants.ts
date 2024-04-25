import { Options } from '@mikro-orm/core'
import { HelixLogger, HelixConfiguration } from '@helix/helix-utilities'
import { entities } from '@helix/entities'
import { MySqlDriver } from '@mikro-orm/mysql'

const logger = new HelixLogger({ name: 'database.constants' })
const config = new HelixConfiguration()

export const dbConfig: Options<MySqlDriver> = {
  entities,
  dbName: config.database.mysql.database.name,
  user: config.database.mysql.user.username,
  password: config.database.mysql.user.password,
  driver: config.database.mysql.driver,
  port: config.database.mysql.net.port,
  host: config.database.mysql.net.host,
  charset: 'utf8mb4',
  debug: config.general.debug,
  logger: logger.debug.bind(logger),
}
