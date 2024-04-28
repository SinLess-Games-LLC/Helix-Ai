import { OpenFeature, ProviderEvents } from '@openfeature/server-sdk'
import { ConfigCatProvider } from '@openfeature/config-cat-provider'
import { HelixLogger } from '../Logger'
import { PollingMode } from 'configcat-js-ssr'

const logger = new HelixLogger({
  name: 'Feature-Flags',
  level: 'info',
})

// configcat-sdk-1/hWXcCIX7VkiGMmG_HAtV4Q/cdpGecK0AEqHukM6Jz7TIQ

export const configCatProvider = ConfigCatProvider.create(
  'configcat-sdk-1/hWXcCIX7VkiGMmG_HAtV4Q/cdpGecK0AEqHukM6Jz7TIQ',
  PollingMode.AutoPoll,
  {
    setupHooks: hooks => hooks.on('clientReady', () => console.log('Client is ready!')),
    pollIntervalSeconds: 95,
  }
)

export const OpenFeatureProvider = OpenFeature.setProvider(configCatProvider)

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
