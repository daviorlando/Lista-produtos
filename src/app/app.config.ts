import { ApplicationConfig, importProvidersFrom, ValueProvider } from '@angular/core';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { AuthModule } from '@auth0/auth0-angular';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import {
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatSnackBarConfig,
} from '@angular/material/snack-bar';


const SNACK_BAR_CONFIG: ValueProvider = {
  provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
  useValue: {
    duration: 3000,
    horizontalPosition: 'right',
    verticalPosition: 'top',
  } as MatSnackBarConfig,
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),

    provideAnimationsAsync(),
    provideHttpClient(),
    SNACK_BAR_CONFIG,
    importProvidersFrom(AuthModule.forRoot({
      domain: 'dev-ui0ec42n4w0m11wd.us.auth0.com',
      clientId: 'wkqIN9GGNZKyXxGNuCCj8GxCJ5ziiXoS',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })),
  ],
};




