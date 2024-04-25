import { ConfigUserInterface } from './User.interface'
import { ConfigNetInterface } from './Net.interface'
import { MySqlDriver } from '@mikro-orm/mysql'

/**
 * Configuration interface for MySQL settings.
 *
 * @interface ConfigMysqlInterface
 */
export interface ConfigMysqlInterface {
  driver: typeof MySqlDriver
  /**
   * The connection URL for MySQL.
   *
   * @type {string}
   */
  connection_url: string

  /**
   * User configuration for MySQL.
   *
   * @type {ConfigUserInterface}
   */
  user: ConfigUserInterface

  /**
   * Network configuration for MySQL.
   *
   * @type {ConfigNetInterface}
   */
  net: ConfigNetInterface

  /**
   * Configuration for the MySQL database.
   *
   * @type {{
   *   name: string;
   *   charset: string;
   *   timezone: string;
   * }}
   */
  database: {
    /**
     * The name of the MySQL database.
     *
     * @type {string}
     */
    name: string

    /**
     * The character set used by the MySQL database.
     *
     * @type {string}
     */
    charset: string

    /**
     * The timezone used by the MySQL database.
     *
     * @type {string}
     */
    timezone: string
  }
}
