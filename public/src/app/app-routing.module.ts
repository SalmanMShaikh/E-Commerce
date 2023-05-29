import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ModalComponent } from './components/modal/modal.component';

const routes: Routes = [
  { path: 'form', component: ModalComponent },
  { path: 'home', component: AppComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
