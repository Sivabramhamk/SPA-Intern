import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './home/department/department.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { InternComponent } from './home/intern/intern.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent,children:[{path:'intern',component:InternComponent},
  {path:'dept',component:DepartmentComponent}]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
