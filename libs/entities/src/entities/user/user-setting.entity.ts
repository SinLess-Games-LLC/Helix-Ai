import { Entity, Property } from '@mikro-orm/core'
import { BaseEntity } from '../base.entity'

@Entity()
export class UserSetting extends BaseEntity {
  @Property({ type: 'boolean', default: false })
  newsletter: boolean = false

  @Property({ type: 'boolean', default: false })
  premium: boolean = false

  @Property({ type: 'boolean', default: false })
  twoFactorAuthentication: boolean = false
}
