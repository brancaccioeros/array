import { Component } from '@angular/core'; 
// Importa il decoratore Component necessario per definire un componente Angular

import { CommonModule } from '@angular/common'; 
// Modulo base Angular: serve per direttive come *ngFor e *ngIf

import { Product } from '../product'; 
// Importa l'interfaccia/modello Product

import { ProductDetail } from '../product-detail/product-detail'; 
// Importa il componente figlio per mostrare i dettagli

@Component({
  selector: 'app-product-list', 
  // Nome del tag HTML del componente

  standalone: true, 
  // Indica che il componente è standalone (non serve NgModule)

  imports: [CommonModule, ProductDetail],  
  // Importa i moduli/componenti usati nell’HTML

  templateUrl: './product-list.html', 
  // Percorso del file HTML associato

  styleUrls: ['./product-list.css']
  // Percorso del file CSS associato
})
export class ProductListComponent {
  
  // Array di prodotti iniziali
  products: Product[] = [
    { name: 'Computer Portatile', price: 800, description: 'PC performante per studiare TPSI.' },
    { name: 'Mouse Wireless', price: 25, description: 'Mouse senza fili.' },
    { name: 'Tastiera Meccanica', price: 60, description: 'Tastiera per programmare velocemente.' },
    { name: 'Monitor 24 pollici', price: 150, description: 'Monitor Full HD.' },
    { name: 'Zaino porta PC', price: 40, description: 'Zaino resistente per la scuola.' }
  ];

  selectedProduct?: Product; 
  // Variabile che contiene il prodotto selezionato (opzionale)

  selectProduct(product: Product): void {
    // Metodo chiamato quando l’utente clicca su un prodotto
    this.selectedProduct = product;
    // Imposta il prodotto selezionato
  }

  deleteProduct(product: Product): void {
    // Metodo per eliminare un prodotto dalla lista

    this.products = this.products.filter(p => p !== product);
    // Crea un nuovo array senza il prodotto selezionato

    if (this.selectedProduct === product) {
      // Se il prodotto eliminato era selezionato
      this.selectedProduct = undefined;
      // Deseleziona il prodotto
    }
  }

  addProduct(name: string, priceStr: string, description: string): void {
    // Metodo per aggiungere un nuovo prodotto

    if (!name || !priceStr || !description) {
      // Controlla che tutti i campi siano compilati
      return;
      // Se manca qualcosa, esce senza fare nulla
    }

    const price = parseFloat(priceStr);
    // Converte il prezzo da stringa a numero

    const newProduct: Product = { name, price, description };
    // Crea un nuovo oggetto prodotto

    this.products.push(newProduct);
    // Aggiunge il nuovo prodotto all’array
  }
}