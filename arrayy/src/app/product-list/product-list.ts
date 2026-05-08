// Importa il decoratore Component da Angular
import { Component } from '@angular/core';

// Importa CommonModule per usare direttive come *ngIf e *ngFor
import { CommonModule } from '@angular/common';

// Importa il modello Product
import { Product } from '../product';

// Importa il componente che mostra i dettagli del prodotto
import { ProductDetail } from '../product-detail/product-detail';

// Definizione del componente Angular
@Component({
  // Nome del selettore HTML del componente
  selector: 'app-product-list',

  // Indica che il componente è standalone
  standalone: true,

  // Componenti e moduli utilizzati nel template
  imports: [CommonModule, ProductDetail],

  // File HTML associato al componente
  templateUrl: './product-list.html',

  // File CSS associato al componente
  styleUrls: ['./product-list.css']
})

// Classe principale del componente
export class ProductListComponent {

  // Array iniziale di prodotti
  products: Product[] = [
    { name: 'Computer Portatile', price: 800, description: 'PC performante per studiare TPSI.' },
    { name: 'Mouse Wireless', price: 25, description: 'Mouse senza fili.' },
    { name: 'Tastiera Meccanica', price: 60, description: 'Tastiera per programmare velocemente.' },
    { name: 'Monitor 24 pollici', price: 150, description: 'Monitor Full HD.' },
    { name: 'Zaino porta PC', price: 40, description: 'Zaino resistente per la scuola.' }
  ];

  // Variabile che contiene il prodotto selezionato
  selectedProduct?: Product;

  // Metodo per selezionare un prodotto
  selectProduct(product: Product): void {

    // Salva il prodotto selezionato
    this.selectedProduct = product;
  }

  // Metodo per eliminare un prodotto
  deleteProduct(product: Product): void {

    // Rimuove il prodotto dall'array
    this.products = this.products.filter(p => p !== product);

    // Se il prodotto eliminato era selezionato,
    // la selezione viene annullata
    if (this.selectedProduct === product) {
      this.selectedProduct = undefined;
    }
  }

  // Metodo per aggiungere un nuovo prodotto
  addProduct(name: string, priceStr: string, description: string): void {

    // Controlla che tutti i campi siano compilati
    if (!name || !priceStr || !description) {
      return;
    }

    // Converte il prezzo da stringa a numero
    const price = parseFloat(priceStr);

    // Crea il nuovo oggetto prodotto
    const newProduct: Product = {
      name,
      price,
      description
    };

    // Aggiunge il nuovo prodotto all'array
    this.products.push(newProduct);
  }
}