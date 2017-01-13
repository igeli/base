import { Component, Input } from '@angular/core';

import { User } from './user'


@Component({
	moduleId : module.id,
	selector: 'user-detail',
	templateUrl: 'templates/user-detail.component.html',
  	styleUrls: [ 'templates/user-detail.component.css' ],
})

export class UserDetailComponent {
	@Input()
	user: User;
}
