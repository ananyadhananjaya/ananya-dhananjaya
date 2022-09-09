import { createAppConfig } from '../helpers/create-app-config'

export const emailAppConfig = createAppConfig({
  title: 'VSCode',
  resizable: true,

  height: 600,
  width: 800,

  trafficLightsStyle: {
    top: '0.6rem',
    left: '0.6rem'
  }
})
