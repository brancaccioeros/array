import { Component } from '@angular/core';
// 1. Aggiungiamo "Component" al nome e specifichiamo il percorso esatto del file
import { ProductListComponent } from './product-list/product-list'; 

@Component({
  selector: 'app-root',
  standalone: true,
  // 2. Usiamo il nome corretto anche qui
  imports: [ProductListComponent], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'arrayy';
}