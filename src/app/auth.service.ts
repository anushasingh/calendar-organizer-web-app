import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { RouterModule, Routes } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import {Router} from "@angular/router";
import { EventEmitter } from '@angular/core';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  public signedin=new EventEmitter<any>(); //if this is tue then signed in

  //  useremail = firebase.auth().currentUser.email;
  public useremail;
   userstring;
  constructor(private firebaseAuth: AngularFireAuth,private router:Router ) {
    this.user = firebaseAuth.authState;
  
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
         this.signedin.emit(false);
       alert("Success!");
       

      })
      .catch(err => {
        alert("Something went wrong:"+err.message);
      });  

  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        this.signedin.emit(true);
       
               

         this.userstring=email;
         var name   = email.substring(0, email.lastIndexOf("@"));
       
         this.useremail = firebase.auth().currentUser.email;
         console.log("login");
          // this.check();
      })
      .catch(err => {
        
      alert("Something went wrong:"+err.message);
      });





  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
   
  }

  getuser(){


      firebase.auth().onAuthStateChanged((user)=> {
  if (user) {
     console.log("dfvxc");
   this.setuseremail(user.email);

    // User is signed in.
  } else {
    this.useremail="events@gmail.com";
    // No user is signed in.
  }
});
 

     
    return this.useremail;
  }


  check(){
       firebase.auth().onAuthStateChanged((user)=> {
  if (user) {
      this.router.navigate(['/user']);
    // User is signed in.
  } else {
     this.router.navigate(['']);

    // No user is signed in.
  }
});
  }

setuseremail(email)
{
  this.useremail=email;
 
}
  

}