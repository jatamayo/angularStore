import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
// SERVICES
import { ProductsService } from 'src/app/services/products/products.service';
// MODELS
import { Product } from 'src/app/models/product.model';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

    product: Product;

    constructor(
        private activateRoute: ActivatedRoute,
        private productsService: ProductsService) { }

    ngOnInit(): void {
        this.activateRoute.params.subscribe(async (params: Params) => {
            const ID = params.id;
            this.product = await this.productsService.getProduct(ID);
            console.log("PRODUCT");
            console.log(this.product);
        });
    }

}
