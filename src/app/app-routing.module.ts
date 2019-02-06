import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DropdownPageComponent } from './components/dropdown-page/dropdown-page.component';

const routes: Routes = [
  {
    'path': '', redirectTo: 'dropdown-page', pathMatch: 'full'
  },
  {
    'path': 'dropdown-page', component: DropdownPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
