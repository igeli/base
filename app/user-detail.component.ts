import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { User } 					from './user'
import { UserService } 				from  './user.service';

import 'rxjs/add/operator/switchMap';

@Component({
	moduleId : module.id,
	selector: 'user-detail',
	templateUrl: 'templates/user-detail.component.html',
  	styleUrls: [ 'templates/user-detail.component.css' ],
})

export class UserDetailComponent implements OnInit {

	constructor(
		private UserService: UserService,
		private route: ActivatedRoute,
		private location: Location,
	){}

	user: User;

	ngOnInit(): void{
		this.route.params
			.switchMap((params: Params) => this.UserService.getUser(+params['id']))
			.subscribe(user => this.user = user);
	}
	
	goBack(): void {
  	this.location.back();
	}	

	save(): void {
		this.UserService.update(this.user)
			.then(() => this.goBack());
	}
}
