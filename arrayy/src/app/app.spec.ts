import { TestBed } from '@angular/core/testing';
// Importa TestBed: utility Angular per configurare e creare componenti nei test

import { App } from './app';
// Importa il componente principale dell'app

describe('App', () => {
// Definisce una suite di test per il componente App

  beforeEach(async () => {
  // Questo blocco viene eseguito prima di ogni test

    await TestBed.configureTestingModule({
      imports: [App],
      // Registra il componente App (standalone) nel modulo di test
    }).compileComponents();
    // Compila template e componenti
  });

  it('should create the app', () => {
  // Primo test: verifica che il componente venga creato

    const fixture = TestBed.createComponent(App);
    // Crea un'istanza del componente App

    const app = fixture.componentInstance;
    // Ottiene l'istanza del componente

    expect(app).toBeTruthy();
    // Verifica che l'istanza esista (non sia null o undefined)
  });

  it('should render title', async () => {
  // Secondo test: verifica che il titolo venga renderizzato nel DOM

    const fixture = TestBed.createComponent(App);
    // Crea una nuova istanza del componente

    await fixture.whenStable();
    // Attende che eventuali operazioni asincrone siano completate

    const compiled = fixture.nativeElement as HTMLElement;
    // Accede al DOM renderizzato del componente

    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, arrayy');
    // Cerca un elemento <h1> e verifica che contenga il testo "Hello, arrayy"
  });

});
