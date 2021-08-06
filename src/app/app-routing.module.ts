import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { UsersTableComponent } from './users-table/users-table.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'GetUsers',
    component: UsersTableComponent,
    pathMatch: 'full'
  },
  {
    path: 'About',
    component: AboutusComponent,
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
