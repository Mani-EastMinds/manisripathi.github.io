import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DropdownPageComponent } from './components/dropdown-page/dropdown-page.component';
import { SelectPageComponent } from './components/select-page/select-page.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'dropdown', pathMatch: 'full'
  },
  {
    path: 'dropdown',
    component: DropdownPageComponent
  },
  {
    path: 'select',
    component: SelectPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
