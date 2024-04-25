import { OpenFeature, ProviderEvents } from '@openfeature/server-sdk'
import { FbProvider } from '@featbit/openfeature-provider-node-server'
import { HelixLogger } from '../Logger'

const logger = new HelixLogger({
  name: 'Feature-Flags',
  level: 'info',
})

export const FeatBitProvider = new FbProvider({
  sdkKey: 'lGU6eOIwjEadyt5zh23eBQzrMWKO_z5U62FL9JiC0B5g',
  streamingUri: 'ws://localhost:5100',
  eventsUri: 'http://localhost:5100',
})

export const OpenFeatureProvider = OpenFeature.setProviderAndWait(FeatBitProvider)

// Evaluations before the provider indicates it is ready may get default values with a
// CLIENT_NOT_READY reason.
OpenFeature.addHandler(ProviderEvents.Ready, eventDetails => {
  logger.info(`Changed ${eventDetails?.flagsChanged}`)
})

OpenFeature.addHandler(ProviderEvents.Error, eventDetails => {
  logger.error(`Error: ${eventDetails?.['error']}`)
})

OpenFeature.addHandler(ProviderEvents.Stale, eventDetails => {
  logger.warn(`Stale: ${eventDetails?.flagsChanged}`)
})

OpenFeature.addHandler(ProviderEvents.ConfigurationChanged, eventDetails => {
  logger.info(`Configuration Changed: ${eventDetails?.flagsChanged}`)
})
