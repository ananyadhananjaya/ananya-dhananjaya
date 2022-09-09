import { homeAppConfig } from './home.app-config'
import { projectsAppConfig } from './projects.app-config'
import { photosAppConfig } from './photos.app-config'
import { safariAppConfig } from './safari.app-config'
import { viewSourceAppConfig } from './view-source.app-config'
import { emailAppConfig } from './vscode.app-config'

export const appsConfig = {
  home: homeAppConfig,
  projects: projectsAppConfig,
  email: emailAppConfig,
  safari: safariAppConfig,
  photos: photosAppConfig,
  'view-source': viewSourceAppConfig
}
