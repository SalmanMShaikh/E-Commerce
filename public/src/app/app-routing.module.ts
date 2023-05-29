import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ModalComponent } from './components/modal/modal.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';

const routes: Routes = [
  { path: 'form', component: ModalComponent },
  { path: 'home', component: AppComponent },
  { path: 'update', component: UpdateProductComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
