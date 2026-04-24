import { ComponentFixture, TestBed } from '@angular/core/testing'; 
// Importa gli strumenti di Angular per creare e testare componenti

import { ProductDetail } from './product-detail'; 
// Importa il componente che vogliamo testare

describe('ProductDetail', () => { 
// Definisce un gruppo di test (suite) per il componente ProductDetail

  let component: ProductDetail; 
  // Variabile che conterrà l'istanza del componente

  let fixture: ComponentFixture<ProductDetail>; 
  // Fixture: wrapper che permette di interagire con il componente e il DOM

  beforeEach(async () => { 
  // Questo blocco viene eseguito prima di ogni test

    await TestBed.configureTestingModule({
      imports: [ProductDetail]
      // Configura un modulo di test e importa il componente (standalone component)
    })
    .compileComponents();
    // Compila il componente e il template HTML

    fixture = TestBed.createComponent(ProductDetail); 
    // Crea un'istanza del componente dentro il test

    component = fixture.componentInstance; 
    // Ottiene l'istanza del componente dalla fixture

    await fixture.whenStable(); 
    // Aspetta che tutte le operazioni asincrone siano completate
  });

  it('should create', () => { 
  // Definisce un singolo test

    expect(component).toBeTruthy(); 
    // Verifica che il componente sia stato creato correttamente (non null/undefined)
  });

});