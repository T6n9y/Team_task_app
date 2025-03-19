import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // explicitly matches export in app.routes.ts

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
