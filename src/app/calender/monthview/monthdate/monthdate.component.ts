import { Component, OnInit ,Input,ViewChild,ElementRef} from '@angular/core';
import {ListdataService} from '../../../listdata.service';

@Component({
  selector: 'app-monthdate',
  templateUrl: './monthdate.component.html',
  styleUrls: ['./monthdate.component.css']
})
export class MonthdateComponent implements OnInit {
@Input() x; //day 
@Input() month;
@Input() curryear;
@Input() events=[];

@Input() eventsname=[];
public whlight=false;
public eventscountlist;
  constructor(private listservice:ListdataService) { 


 
  }

  ngOnInit() {
this.listservice.hlight.subscribe(
  (data)=>{
  if(this.x==data&&this.x!=null)
  {
   this.whlight=true;
 
  }
  else 
  {
    this.whlight=false;
  }

  }
);

  }


 y(text)
{  
   this.events.push(text);
 }
sendlist(){


 

  
  this.listservice.eventslist.emit(this.eventsname);
  this.listservice.day.emit(this.x);
  this.listservice.month.emit(this.month);
  this.listservice.year.emit(this.curryear);
  var arr=[];
  this.listservice.templist.emit(arr);

  this.listservice.hlight.emit(this.x);

}
cevent(){
if(this.events[0]>0&&this.whlight==false)
{
  return true;

}
else
{
  return false;
}

}



}
