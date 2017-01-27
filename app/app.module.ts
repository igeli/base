import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }	  from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }          from './app.component';
import { UserDetailComponent }   from './user-detail.component';
import { GroupDetailComponent }  from './group-detail.component';
import { UsersComponent }        from './users.component';
import { GroupsComponent }       from './groups.component';
import { UserService }		       from './user.service';
import { GroupService }		       from './group.service';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports:   [   
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    UsersComponent,
    GroupsComponent,
    UserDetailComponent,
    GroupDetailComponent
  ],
  providers: [ UserService, GroupService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
