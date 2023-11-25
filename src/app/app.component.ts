import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping_cart';
 
//   items: { product: string; quantity: number; price: number }[] = [];
// newItem = { product: '', quantity: 0, price: 0 };
// addItem() {
//     if (this.newItem.product.trim() !== '') {
//       this.items.push({ ...this.newItem });
//       this.newItem = { product: '', quantity: 0, price: 0 };
//     }
//   }
// removeItem(index: number) {
//     this.items.splice(index, 1);
//   }
// }

items: { product: string; quantity: number; price: number; total: number }[] = [];
newItem = { product: '', quantity: 0, price: 0 };
// totalCost: number = 0;

addItem() {
  if (this.newItem.product.trim() !== '') {
    // Calculate the total for the new item
    const newItemTotal = this.newItem.quantity * this.newItem.price;

    // Add the new item to the list with the calculated total
    this.items.push({ ...this.newItem, total: newItemTotal });

    // Update the total cost
    // this.totalCost += newItemTotal;

    // Reset the form fields
    this.newItem = { product: '', quantity: 0, price: 0 };
  }
}

removeItem(index: number) {
  // Subtract the removed item's total from the total cost
  // this.totalCost -= this.items[index].total;

  // Remove the item from the list
  this.items.splice(index, 1);
}
}
