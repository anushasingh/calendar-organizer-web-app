import { Component,OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { RouterModule, Routes,Router ,ActivatedRoute} from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   providers: []
})

export class AppComponent  implements OnInit {


title = 'app';



 constructor(private router:Router,private auth:AuthService) {}

 ngOnInit() {

 
//checks if user is signed in add redirects to route accordingly

   firebase.auth().onAuthStateChanged((user)=> {
    if (user) {
         //user is logged in
         var useremail = firebase.auth().currentUser.email;
         this.auth.setuseremail( useremail );
         this.router.navigate(['/user']);
    }
   else {
        //user is logged out
         this.router.navigate(['']);
     }
    });
    
 }
 

}
