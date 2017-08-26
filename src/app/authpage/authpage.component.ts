import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import * as firebase from 'firebase/app';
import { RouterModule, Routes,Router ,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-authpage',
  templateUrl: './authpage.component.html',
  styleUrls: ['./authpage.component.css']
})
export class AuthpageComponent   implements OnInit {
wsignedin=false;
  email: string;
  password: string;
  toggle=true;
  msg="Already registered?";
      btnmsg="Sign up";
constructor(public authService: AuthService,private router:Router) {
  
}


ngOnInit() {
  firebase.auth().onAuthStateChanged((user)=> {
  if (user&&this.wsignedin==true) {
     console.log("Xz"+this.wsignedin);

       console.log("authcomp");
         var useremail = firebase.auth().currentUser.email;
          console.log("app"+useremail);
         this.authService.setuseremail( useremail );
         
          this.router.navigate(['/user']);
    // User is signed in.
  } else {
      console.log("Xvvz"+this.wsignedin);
      this.router.navigate(['']);
    // No user is signed in.
  }
});















  this.authService.signedin.subscribe(
  (data)=>{
    this.wsignedin=data;
 //   console.log("XZ"+data);
  }
);
    
 }
 
  signup() {

    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';    
  }

  logout() {
    this.authService.logout();
  }

  signuporsigin()
  {
 if(this.btnmsg=="Sign in")
 {
   this.login();
 }
 else
 {
   this.signup();
 }

  }

  msgbtn()
  {

    if(this.toggle==true)
    {
                
      this.msg="Not registered?";
      this.btnmsg="Sign in";
      this.toggle=false;
    }
    else
    {
          this.msg="Already registered?";
      this.btnmsg="Sign up";
      this.toggle=true;
    }

  }


    
}
