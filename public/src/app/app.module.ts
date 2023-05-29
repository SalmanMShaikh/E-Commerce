import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ListingComponent } from './components/listing/listing.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './components/modal/modal.component';
import { UpdateProductComponent } from '../app/components/update-product/update-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListingComponent,
    ModalComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ModalComponent, ListingComponent],
  bootstrap: [AppComponent]

})
export class AppModule { }
