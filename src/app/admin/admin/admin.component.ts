import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menu=[
    {
      name:'Dashboard',
      icon:'space_dashboard',
      url:'/admin/dashboard'
    },
    {
      group:'Menu Group',
      children:[
        {
          name:'Product',
          icon:'production_quantity_limits',
          url:'/admin/product'
        }
      ]
    }
  ];

}
