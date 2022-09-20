import { createAppConfig } from '../helpers/create-app-config'

export const homeAppConfig = createAppConfig({
  title: 'Home',
  link: '',
  expandable: true,
  resizable: false,

  height: 300 * 1.414,
  width: 300,

  trafficLightsStyle: {
    top: '0.7rem',
    left: '0.7rem'
  }
})
