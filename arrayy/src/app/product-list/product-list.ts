import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // FONDAMENTALE per far funzionare *ngFor nell'HTML!
import { Product } from '../product'; // Assicurati che product.ts sia nella cartella app
import { ProductDetail } from '../product-detail/product-detail'; // Importiamo il componente figlio

@Component({
  selector: 'app-product-list',
  standalone: true, // DEVE esserci questa riga
  imports: [CommonModule, ProductDetail],  // DEVONO esserci questi import
  templateUrl: './product-list.html', // Assicurati che questo nome corrisponda al tuo file HTML
  styleUrls: ['./product-list.css']
})
export class ProductListComponent {
  
  // Il resto della logica rimane uguale...
  products: Product[] = [
    { name: 'Computer Portatile', price: 800, description: 'PC performante per studiare TPSI.' },
    { name: 'Mouse Wireless', price: 25, description: 'Mouse senza fili.' },
    { name: 'Tastiera Meccanica', price: 60, description: 'Tastiera per programmare velocemente.' },
    { name: 'Monitor 24 pollici', price: 150, description: 'Monitor Full HD.' },
    { name: 'Zaino porta PC', price: 40, description: 'Zaino resistente per la scuola.' }
  ];

  selectedProduct?: Product;

  selectProduct(product: Product): void {
    this.selectedProduct = product;
  }

  deleteProduct(product: Product): void {
    this.products = this.products.filter(p => p !== product);
    if (this.selectedProduct === product) {
      this.selectedProduct = undefined;
    }
  }

  addProduct(name: string, priceStr: string, description: string): void {
    if (!name || !priceStr || !description) {
      return;
    }
    const price = parseFloat(priceStr);
    const newProduct: Product = { name, price, description };
    this.products.push(newProduct);
  }
}