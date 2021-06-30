import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDesign } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { StudentComponent } from './student/student.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';


const routes: Routes = [
  {
    path:'',
    component:AdminComponent,
    children:[
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'student',
        component:StudentComponent
      },
      {
        path:'',
        pathMatch:'full',
        redirectTo:'/admin/dashboard' 
      }
    ]
  }
]

@NgModule({
  declarations: [
    AdminComponent, 
    DashboardComponent,
    StudentDetailComponent,
    StudentComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign,
    FormsModule
  ]
}
)
export class AdminModule { }
