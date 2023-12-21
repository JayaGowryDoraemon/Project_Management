import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardpageComponent } from './dashboardpage/dashboardpage.component';
import { RouterModule, Routes } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';  
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { NgChartsModule } from 'ng2-charts';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { AddprojectComponent } from './addproject/addproject.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DatePipe } from '@angular/common';
import { ProjectstageComponent } from './projectstage/projectstage.component';
import { AddprojectstageComponent } from './addprojectstage/addprojectstage.component';
import { TodolistComponent } from './todolist/todolist.component'

const routes: Routes = [
  {path:'dashboardpage',component:DashboardpageComponent},
  {path:'addproject',component:AddprojectComponent},
  {path:'projectstage',component:ProjectstageComponent},
  {path:'addprojectstage',component:AddprojectComponent},
  {path:'todolist',component:TodolistComponent},
  {
    path:'',
    redirectTo:'dashboardpage',
    pathMatch:'full'
  }
]

@NgModule({
  declarations: [
    DashboardpageComponent,
    AddprojectComponent,
    ProjectstageComponent,
    AddprojectstageComponent,
    TodolistComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    NgChartsModule.forRoot(),
    NgChartsModule,
    MatTableModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    DatePipe
    
    
  ]
})
export class DashboardmoduleModule { }
