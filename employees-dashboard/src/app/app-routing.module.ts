import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployersManagmentComponent } from './modules/emloyers/employers-managment/employers-managment.component';

const routes: Routes = [
  { path: 'employers', component: EmployersManagmentComponent },
  { path: '', redirectTo: '/employers', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
