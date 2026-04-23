// export: Parola chiave che rende l'interfaccia visibile/esportabile per poterla usare in altri file.
// interface: Parola chiave di TypeScript per creare uno "stampo" o struttura di dati.
// Product: Il nome che diamo al nostro modello (inizia sempre con la lettera maiuscola per convenzione).
// { : Parentesi graffa aperta, segna l'inizio della definizione dell'interfaccia.
export interface Product {

  // name: Nome della prima proprietà (il nome del prodotto).
  // : (due punti): Simbolo che separa il nome della proprietà dal suo tipo di dato.
  // string: Indica che il dato sarà una sequenza di caratteri (testo).
  // ; (punto e virgola): Simbolo che indica la fine dell'istruzione/riga.
  name: string;

  // price: Nome della proprietà per il prezzo.
  // number: Indica che il dato accettato sarà un numero (intero o decimale).
  price: number;
  
  // description: Nome della proprietà per la descrizione.
  description: string;

// } : Parentesi graffa chiusa, segna la fine dell'interfaccia.
}