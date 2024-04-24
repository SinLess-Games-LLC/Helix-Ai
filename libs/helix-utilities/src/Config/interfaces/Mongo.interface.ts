import { MongoDriver } from '@mikro-orm/mongodb'
import { ConfigNetInterface } from './Net.interface'
import { ConfigUserInterface } from './User.interface'

/**
 * Configuration interface for MongoDB settings.
 *
 * @interface ConfigMongoInterface
 */
export interface ConfigMongoInterface {
  driver: typeof MongoDriver
  /**
   * Network configuration for MongoDB.
   *
   * @type {ConfigNetInterface}
   */
  net: ConfigNetInterface

  /**
   * User configuration for MongoDB.
   *
   * @type {ConfigUserInterface}
   */
  user: ConfigUserInterface

  /**
   * Configuration for the MongoDB database.
   *
   * @type {{
   *   name: string;
   * }}
   */
  database: {
    /**
     * The name of the MongoDB database.
     *
     * @type {string}
     */
    name: string
    URI: string
  }
}
