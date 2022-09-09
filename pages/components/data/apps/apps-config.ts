import { homeAppConfig } from './home.app-config'
import { projectsAppConfig } from './projects.app-config'
import { photosAppConfig } from './photos.app-config'
import { twitterAppConfig } from './twitter.app-config'
import { viewSourceAppConfig } from './view-source.app-config'
import { emailAppConfig } from './email.app-config'

export const appsConfig = {
  home: homeAppConfig,
  projects: projectsAppConfig,
  email: emailAppConfig,
  photos: photosAppConfig,
  twitter: twitterAppConfig,
  github: viewSourceAppConfig
}
