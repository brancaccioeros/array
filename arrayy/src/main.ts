 // Importa la funzione che avvia (bootstrap) un'app Angular standalone nel browser
import { bootstrapApplication } from '@angular/platform-browser';

// Importa la configurazione globale dell'app (provider, routing, ecc.)
import { appConfig } from './app/app.config';

// Importa il componente principale dell'app (root component)
import { App } from './app/app';


// Avvia l'app Angular nel browser
// - App → componente root
// - appConfig → configurazioni globali dell'app
bootstrapApplication(App, appConfig)

  // Gestione degli errori nel caso il bootstrap fallisca
  .catch((err) => console.error(err));