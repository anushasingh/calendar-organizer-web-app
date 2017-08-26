import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AuthService } from './auth.service';
import { RouterModule, Routes,Router ,ActivatedRoute} from '@angular/router';
import * as firebase from 'firebase/app';
@Injectable()
export class HttpService {
public id:String;
  constructor(private http:Http ,private auth:AuthService,private route:ActivatedRoute) {

   }


getdata(){

 

let email;
let name;



if(this.auth.getuser()!=null)
{

   email=this.auth.getuser();
    name   = email.substring(0, email.lastIndexOf("@"));


}
else{
  email="events@gmail.com";
   name   = email.substring(0, email.lastIndexOf("@"));
}



  return this.http.get('https://planner-bad68.firebaseio.com/'+name+'.json');


}
postdata(text,date)
{
  let email=this.auth.getuser();
var name   = email.substring(0, email.lastIndexOf("@"));


let data={

};
data[text]=date;


return this.http.post('https://planner-bad68.firebaseio.com/'+name+'.json',data);
}


}
