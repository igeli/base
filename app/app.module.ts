import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }	 from '@angular/forms';
import { RouterModule }	from '@angular/router';

import { AppComponent }  from './app.component';
import { UserDetailComponent } from './user-detail.component';
import { UsersComponent }	from './users.component';
import { GroupsComponent }	from './groups.component';
import { UserService }		from './user.service';
import { GroupService }		from './group.service';


@NgModule({
  imports:   [   
  BrowserModule,
  FormsModule,
  RouterModule.forRoot([
  {
  	path: 'users',
  	component: UsersComponent
  },
  {
  	path: 'groups',
  	component: GroupsComponent
  }
  ])
  ],
  declarations: [
   AppComponent,
   UsersComponent,
   GroupsComponent,
   UserDetailComponent
   ],
   providers:[
   UserService,
   GroupService
   ],
  bootstrap:    [ AppComponent ]
})




export class AppModule { }
