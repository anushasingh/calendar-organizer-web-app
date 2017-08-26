import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MonthviewComponent } from './calender/monthview/monthview.component';
import {ModalModule} from "ng2-modal";
import { MonthdateComponent } from './calender/monthview/monthdate/monthdate.component';
import {HttpService} from './http.service';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { FormsModule } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';


// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../environments/environment';


import { AuthService } from './auth.service';
import { AuthpageComponent } from './authpage/authpage.component';
import { RouterModule, Routes } from '@angular/router';
import {CalenderComponent} from './calender/calender.component';

import { ListComponent } from './calender/list/list.component';
import {ListdataService } from './listdata.service';
import { HeaderComponent } from './calender/header/header.component';
import { EmptydateComponent } from './calender/monthview/emptydate/emptydate.component';

const appRoutes: Routes = [

  { path: 'user',      component:  CalenderComponent },
 { path: '',      component: AuthpageComponent },
 
];


@NgModule({
  declarations: [
    AppComponent,
    MonthviewComponent,
    MonthdateComponent,
    AuthpageComponent,
     CalenderComponent,
  
     ListComponent,
  
     HeaderComponent,
  
     EmptydateComponent
     

  ],
  imports: [
       RouterModule,
     RouterModule.forRoot(
      appRoutes // <-- debugging purposes only
    ),
    BrowserModule,
    ModalModule,
     HttpModule,
     AngularFireModule.initializeApp(environment.firebase),
     FormsModule,
   
    AngularFireDatabaseModule,
    AngularFireAuthModule

  ],
  providers: [HttpService,AuthService,ListdataService],
  bootstrap: [AppComponent]
})


export class AppModule {

  
 }
