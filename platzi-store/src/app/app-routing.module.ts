import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
// COMPONENTS
import { ProductComponent } from 'src/app/components/product/product.component';
import { ProductsComponent } from 'src/app/components/products/products.component';
import { ProductDetailComponent } from 'src/app/components/product-detail/product-detail.component';
import { ContactComponent } from 'src/app/components/contact/contact.component';
import { TestingComponent } from 'src/app/components/testing/testing.component';
import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';
import { LayoutComponent } from 'src/app/components/layout/layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: '/home',
                pathMatch: 'full',
            },
            {
                path: 'home',
                loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
                // component: HomeComponent
            },
            {
                path: 'products',
                component: ProductsComponent
            },
            {
                path: 'products/:id',
                component: ProductDetailComponent
            },
            {
                path: 'contact',
                component: ContactComponent
            }
        ]
    },
    {
        path: 'testing',
        component: TestingComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
