import { ComponentFixture, TestBed } from '@angular/core/testing'; 
// Importa gli strumenti Angular per creare e testare componenti

// 1. Correggiamo il nome della classe in ProductListComponent
import { ProductListComponent } from './product-list'; 
// Importa il componente che vogliamo testare

describe('ProductListComponent', () => { 
// Definisce una suite di test per ProductListComponent

  let component: ProductListComponent; 
  // Variabile che conterrà l'istanza del componente

  let fixture: ComponentFixture<ProductListComponent>; 
  // Fixture: permette di accedere al DOM e gestire il ciclo di vita del componente

  beforeEach(async () => { 
  // Questo blocco viene eseguito prima di ogni test

    await TestBed.configureTestingModule({
      // 2. Anche qui, dichiariamo il componente corretto
      imports: [ProductListComponent] 
      // Registra il componente nel modulo di test (utile per componenti standalone)
    })
    .compileComponents();
    // Compila il template HTML e il componente

    fixture = TestBed.createComponent(ProductListComponent);
    // Crea un'istanza del componente nel contesto di test

    component = fixture.componentInstance;
    // Ottiene l'istanza del componente dalla fixture

    fixture.detectChanges();
    // Avvia il data binding e il ciclo di vita 
  });

  it('should create', () => { 
  // Definisce un test unitario

    expect(component).toBeTruthy(); 
    // Verifica che il componente sia stato creato correttamente
  });

});