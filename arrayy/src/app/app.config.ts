import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
// Importa:
// - ApplicationConfig: tipo usato per configurare l'app Angular standalone
// - provideBrowserGlobalErrorListeners: abilita la gestione globale degli errori nel browser

import { provideRouter } from '@angular/router';
// Importa la funzione per configurare il sistema di routing

import { routes } from './app.routes';
// Importa la definizione delle rotte dell'applicazione

export const appConfig: ApplicationConfig = {
// Definisce la configurazione globale dell'app Angular

  providers: [
    provideBrowserGlobalErrorListeners(),
    // Attiva i listener globali per intercettare errori (utile per debug e logging)

    provideRouter(routes)
    // Configura il router usando le rotte definite in app.routes
  ]

};