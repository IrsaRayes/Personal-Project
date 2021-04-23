import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { FileUploaderComponent } from '../admin/file-uploader/file-uploader.component';
import { MaterialDesign } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from '../admin/product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';

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
        path:'product',
        component:ProductComponent
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
     ProductDetailComponent,
     FileUploaderComponent,
     ProductComponent,
     GalleryComponent,
     ImageUploaderComponent
    ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign,
    FormsModule
  ]
})
export class AdminModule { }
