import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { provideAuth0 } from '@auth0/auth0-angular';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideAuth0({
      domain: 'dev-ui0ec42n4w0m11wd.us.auth0.com',
      clientId: 'wkqIN9GGNZKyXxGNuCCj8GxCJ5ziiXoS',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
    ...appConfig.providers
  ]
})
  .catch((err) => console.error(err));

