import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectComponent } from './components/select/select.component';

const routes: Routes = [
  {
    'path': '', redirectTo: 'select', pathMatch: 'full'
  },
  {
    'path': 'select', component: SelectComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
