import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectPageComponent } from './components/select-page/select-page.component';

const routes: Routes = [
  {
    'path': '', redirectTo: 'select-page', pathMatch: 'full'
  },
  {
    'path': 'select-page', component: SelectPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
