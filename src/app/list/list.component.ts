import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products:any=[
    {
      id:1,
      name:"Auricular 1"
    },
    {
      id:2,
      name:"Auricular 2"
    },
    {
      id:3,
      name:"Auricular 3"
    },
    {
      id:4,
      name:"Auricular 4"
    },
    {
      id:5,
      name:"Auricular 5"
    },
    {
      id:6,
      name:"Auricular 6"
    },
  ]
  constructor() { }

  promo(){
    this.products=[
      {
        id:7,
        name:"Auricular 7"
      },
      {
        id:8,
        name:"Auricular 8"
      },
      {
        id:9,
        name:"Auricular 9"
      },
    ]
  }

  ngOnInit(): void {
  }

}
