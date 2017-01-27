import { NgModule } 			from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GroupsComponent } 		from './groups.component';
import { UsersComponent }		from './users.component'	;
import { UserDetailComponent }	from './user-detail.component';
import { GroupDetailComponent }	from './group-detail.component';

const routes: Routes = [
	{ path: 'users', component: UsersComponent },
	{path: 'groups', component: GroupsComponent },
	{ path: 'group/:id', component: GroupDetailComponent },
];

@NgModule ({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule],

})

export class AppRoutingModule {};


