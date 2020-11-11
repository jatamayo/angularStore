import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
// MODULES
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from './../../shared/shared.module';

@NgModule({
    declarations: [
        BannerComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule
    ],
    exports: [],
    providers: [],
})
export class HomeModule{

}
