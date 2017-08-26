import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 email: string;
  password: string;
constructor(public authService: AuthService) {}

ngOnInit()
{
firebase.auth().onAuthStateChanged((user)=> {
  if (user) {
     
   
         var useremail = firebase.auth().currentUser.email;
       
       this.email   = useremail.substring(0, useremail.lastIndexOf("@"));
         

    // User is signed in.
  } else {
 
    // No user is signed in.
  }
});

}
 
  logout() {
    this.authService.logout();
  }
    
}
