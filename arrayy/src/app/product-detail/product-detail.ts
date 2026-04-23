import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // IMPORTANTE: Serve per far funzionare *ngIf nel file HTML
import { Product } from '../product'; // Importiamo l'interfaccia (i due punti .. servono per tornare alla cartella principale app)

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule], // Aggiungiamo CommonModule qui dentro
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail { // Manteniamo il nome della classe generato in automatico

  // @Input(): DECORATORE fondamentale. Dice ad Angular: "Questa variabile riceverà un valore dall'esterno" (dal componente padre).
  @Input() product?: Product;

}