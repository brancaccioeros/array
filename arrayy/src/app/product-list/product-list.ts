import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { Product } from '../product';

import { ProductDetail } from '../product-detail/product-detail';

@Component({
  selector: 'app-product-list',

  standalone: true,

  imports: [CommonModule, ProductDetail],

  templateUrl: './product-list.html',

  styleUrls: ['./product-list.css']
})

export class ProductListComponent {

  // Lista prodotti iniziale
  products: Product[] = [
    { name: 'Computer Portatile', price: 800, description: 'PC performante per studiare TPSI.' },
    { name: 'Mouse Wireless', price: 25, description: 'Mouse senza fili.' },
    { name: 'Tastiera Meccanica', price: 60, description: 'Tastiera per programmare velocemente.' },
    { name: 'Monitor 24 pollici', price: 150, description: 'Monitor Full HD.' },
    { name: 'Zaino porta PC', price: 40, description: 'Zaino resistente per la scuola.' }
  ];

  // Prodotto selezionato
  selectedProduct?: Product;

  // Selezione prodotto
  selectProduct(product: Product): void {
    this.selectedProduct = product;
  }

  // Eliminazione prodotto
  deleteProduct(product: Product): void {

    this.products = this.products.filter(p => p !== product);

    if (this.selectedProduct === product) {
      this.selectedProduct = undefined;
    }
  }

  // Aggiunta prodotto
  addProduct(name: string, priceStr: string, description: string): void {

    // Controllo campi vuoti
    if (!name || !priceStr || !description) {
      return;
    }

    // Conversione prezzo
    const price = parseFloat(priceStr);

    // Se il prezzo è maggiore di 60
    if (price > 60) {

      // Mostra alert di conferma
      const conferma = confirm(
        'Il prodotto costa più di 60€. Sei sicuro di volerlo aggiungere?'
      );

      // Se l'utente annulla
      if (!conferma) {
        return;
      }
    }

    // Creazione nuovo prodotto
    const newProduct: Product = {
      name,
      price,
      description
    };

    // Aggiunta alla lista
    this.products.push(newProduct);
  }

}