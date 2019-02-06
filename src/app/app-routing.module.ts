import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectComponent } from './components/select/select.component';

const routes: Routes = [
  {
  'path': '', component: SelectComponent, pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
