import { Component, OnInit } from '@angular/core';
import {ListdataService} from '../../listdata.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

public eventslist;
public day;
public year;
public month;


public templist;

  constructor(private listdataservice:ListdataService) { 

this.listdataservice.eventslist.subscribe(
  (data)=>{
    this.eventslist=data;

  }
);
this.listdataservice.day.subscribe(
  (data)=>{
    this.day=data;
 
  }
);this.listdataservice.month.subscribe(
  (data)=>{
    this.month=data;

  }
);this.listdataservice.year.subscribe(
  (data)=>{
    this.year=data;
  
  }
);
this.listdataservice.templist.subscribe(
  (data)=>{
    this.templist=data;

  }
);




  }

  ngOnInit() {
  }




}
