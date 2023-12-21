import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SignuppageComponent } from './signuppage/signuppage.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';  
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { LoginpageComponent } from './loginpage/loginpage.component';

const routes: Routes = [
  {path:'homepage',component:HomePageComponent},
  {path:'signuppage',component:SignuppageComponent},
  {path:'loginpage',component:LoginpageComponent},
  
  {
    path:'',
    redirectTo:'homepage',
    pathMatch:'full'
  }
];

@NgModule({
  declarations: [
    HomePageComponent,
    SignuppageComponent,
    LoginpageComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class LoginModuleModule { }
