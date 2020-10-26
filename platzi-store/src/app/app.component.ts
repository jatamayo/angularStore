import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {

    power = 10;
    title = 'hola mundo';
    array = ['🍎', '🍏', '🍇', '🍌', '🍑'];
    products: Product[] = [
        {
            id: 1,
            image: 'assets/images/camiseta.png',
            title: 'Camiseta',
            price: 80000,
            description: 'bla bla bla bla bla',
        },
        {
            id: 2,
            image: 'assets/images/hoodie.png',
            title: 'Hoodie',
            price: 80000,
            description: 'bla bla bla bla bla'
        },
        {
            id: 3,
            image: 'assets/images/mug.png',
            title: 'Mug',
            price: 80000,
            description: 'bla bla bla bla bla'
        },
        {
            id: 4,
            image: 'assets/images/pin.png',
            title: 'Pin',
            price: 80000,
            description: 'bla bla bla bla bla'
        },
        {
            id: 5,
            image: 'assets/images/stickers1.png',
            title: 'Stickers',
            price: 80000,
            description: 'bla bla bla bla bla'
        },
        {
            id: 6,
            image: 'assets/images/stickers2.png',
            title: 'Stickers',
            price: 80000,
            description: 'bla bla bla bla bla'
        }
    ];

    // Similar to languages like Java,
    // void is used where there is no data. For example,
    // if a function does not return any value then you can specify void as return type.
    addElement(): void {
        this.array.push('nuevo item');
    }

    deleteItem(index: number): void {
        this.array.splice(index, 1);
    }

    addProduct(id: number): void{
        console.log('productID');
        console.log(id);
    }
}
