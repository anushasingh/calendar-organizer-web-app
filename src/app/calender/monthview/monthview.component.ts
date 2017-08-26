import { Component, OnInit } from '@angular/core';
import {Response } from '@angular/http';
import {HttpService} from '../../http.service';
import { ChangeDetectorRef } from '@angular/core';
import {ListdataService} from '../../listdata.service';
import { AuthService } from '../../auth.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-monthview',
  templateUrl: './monthview.component.html',
  styleUrls: ['./monthview.component.css'],
 
})
export class MonthviewComponent implements OnInit {

public dates=[[],[],[],[],[]];
public monthword="January";
public month=0;//start index with 0



public year=2017;
public monthyearstring=this.monthword+", "+this.year;
public events =[ //for length
  [[],[],[],[],[],[],[]],
  [[],[],[],[],[],[],[]],
  [[],[],[],[],[],[],[]],
  [[],[],[],[],[],[],[]],
  [[],[],[],[],[],[],[]],
  ];

public eventname =[
  [[],[],[],[],[],[],[]],
  [[],[],[],[],[],[],[]],
  [[],[],[],[],[],[],[]],
  [[],[],[],[],[],[],[]],
  [[],[],[],[],[],[],[]],
  ];

public todaydate;





  constructor(private httpservice :HttpService,private ChangeDetectorRef:ChangeDetectorRef,private listdataservice:ListdataService,public auth: AuthService) { 
    this.listdataservice.day.subscribe(
  (data)=>{
    this.todaydate=data;
   
  });
  }

  ngOnInit() {
var today = new Date();


setTimeout(()=>{ 
  var mm = today.getMonth(); //January is 0!
var yyyy = today.getFullYear();

this.year=yyyy;  
 
 this.month=mm;
  
this.fillcalender(this.year,this.month); 
 },1000);

}






getstartday(month)
{
var date1=new Date(this.year,month,1);
return date1.getDay()+1;
}







getnofdaysinmonth(year,month)
{


var FebNoOfDays;
 
 //Determing if February (28,or 29)  
 if (month == 1){
    if ( (year%100!=0) && (year%4==0) || (year%400==0)){
      FebNoOfDays = 29;
    }else{
      FebNoOfDays = 28;
    }
 }
 

var dayPerMonth = [31, FebNoOfDays,31,30,31,30,31,31,30,31,30,31];
return dayPerMonth[month];


}




//this needs the startday which is the index of week +1 ((sun has originally 0 index , but this needs 1)) and
//it needs the number of days of that month

fillcalender(year,month) // for startday sun=1,
{


this.eventname =[
  [[],[],[],[],[],[],[]],
  [[],[],[],[],[],[],[]],
  [[],[],[],[],[],[],[]],
  [[],[],[],[],[],[],[]],
  [[],[],[],[],[],[],[]],
  ];


  this.events =[
  [[],[],[],[],[],[],[]],
  [[],[],[],[],[],[],[]],
  [[],[],[],[],[],[],[]],
  [[],[],[],[],[],[],[]],
  [[],[],[],[],[],[],[]],
  ];
let data;
 
this.httpservice.getdata().subscribe(
  (response:Response)=>{
    data=response.json();
  console.log("requestmade");
var startday=this.getstartday(month);
var noOfdays=this.getnofdaysinmonth(year,month);
var num=-((startday-1)-1);

for(var i=0;i<5;i++)
{
  for(var k=0;k<7;k++)
  {
    
    if(num<=noOfdays&&num>0){
    this.dates[i][k]=num;


  
    var numstring;
    var monthstring;
    var datestring;
    if(num<10)
    {
       numstring="0"+num.toString();
    }
    else
    {
      numstring=num.toString();
    }
    if(month<10)
    {
       monthstring="0"+month.toString();
    }
    else
    {
      monthstring=month.toString();
    }
    datestring=numstring+ monthstring+year.toString();
   
  let count=0;
    




for (let key in data) {
  if (!data.hasOwnProperty(key)) continue;


  Object.keys(data[key]).forEach((p)=> {
 
     if(data[key][p]==datestring)
  {
    count++;
    
 
    this.eventname[i][k].push(p);
    this.events[i][k][0]=count;


}
});
}
   


    }
  else{
    this.dates[i][k]=null;
  }


    num++;

  
 
  }
}
this.ChangeDetectorRef.detectChanges();


  }
);


this.monthword=this.getmonthword(this.month);

this.monthyearstring=this.monthword+", "+this.year;

}

getmonthword(monthno)
{
var monthNames = ["January","February","March","April","May","June","July","August","September","October","November", "December"];
return monthNames[monthno];
}



prev()
{
  if(this.month==0)
  {
    this.month=11;
    this.year--;
  }


else
{
  this.month--;
}

this.fillcalender(this.year,this.month);
this.monthword=this.getmonthword(this.month);
this.monthyearstring=this.monthword+", "+this.year;


}



next()
{

  if(this.month==11)
  {
    this.month=0;
    this.year++;
  }


else
{
  this.month++;
}


this.fillcalender(this.year,this.month);
this.monthword=this.getmonthword(this.month);
this.monthyearstring=this.monthword+", "+this.year;

}






 authentication(u,p)
 {
   this.httpservice.getdata().subscribe(
(response:Response)=>{

}
   );
 }


 y(text)
 {

var templist=[];
templist.push(text);
this.listdataservice.templist.emit(templist);

    var numstring;
    var monthstring;
    var datestring;
    if(this.todaydate<10)
    {
       numstring="0"+this.todaydate.toString();
    }
    else
    {
      numstring=this.todaydate.toString();
    }


    if(this.month<10)
    {
       monthstring="0"+this.month.toString();
    }
    else
    {
      monthstring=this.month.toString();
    }
    datestring=numstring+ monthstring+this.year.toString();


this.httpservice.postdata(text,datestring).subscribe();



 }
}
