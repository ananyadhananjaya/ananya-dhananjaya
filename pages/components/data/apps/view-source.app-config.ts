import { createAppConfig } from '../helpers/create-app-config'

export const viewSourceAppConfig = createAppConfig({
  title: `View Source`,
  resizable: true,

  shouldOpenWindow: false,
  externalAction: () =>
    window.open('https://github.com/puruvj/macos-web', '_blank')
})
