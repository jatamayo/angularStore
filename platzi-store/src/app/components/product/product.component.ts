import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
// Recibir y enviar datos mediante inputs y outputs desde angular core
import { Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {

    @Input() product: Product;
    @Output() outputAddProduct: EventEmitter<number> = new EventEmitter();

    // Date
    today = new Date();

    addProduct(): void {
        console.log('AGREGAR AL CARRITO');
        this.outputAddProduct.emit(this.product.id);
    }

    constructor() { }

    ngOnInit(): void {
    }

}
