import { Component } from '@angular/core';
// Importa il decoratore Component necessario per definire un componente Angular

// 1. Aggiungiamo "Component" al nome e specifichiamo il percorso esatto del file
import { ProductListComponent } from './product-list/product-list'; 
// Importa il componente ProductListComponent (componente figlio)

@Component({
  selector: 'app-root',
  // Nome del tag HTML principale dell'app (usato in index.html)

  standalone: true,
  // Indica che il componente è standalone (non serve NgModule)

  // 2. Usiamo il nome corretto anche qui
  imports: [ProductListComponent], 
  // Importa il componente ProductList per poterlo usare nel template

  templateUrl: './app.html',
  // Percorso del file HTML associato al componente

  styleUrl: './app.css'
  // Percorso del file CSS associato (nota: spesso si usa "styleUrls" al plurale)
})
export class App {
  title = 'arrayy';
  // Proprietà del componente (può essere usata nel template con {{ title }})
}