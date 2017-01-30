import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { GroupService}				from './group.service';
import { Group } 					from './group';

import 'rxjs/add/operator/switchMap';

@Component({
	moduleId: module.id,
	selector: 'group-detail',
	templateUrl: 'templates/group-detail.component.html',
  	styleUrls: [ 'templates/group-detail.component.css' ],


})

export class GroupDetailComponent implements OnInit{

	constructor(
		private GroupService: GroupService,
		private route: ActivatedRoute,
		private location: Location,
	){}

	group: Group;

	ngOnInit(): void{
		this.route.params
			.switchMap((params: Params) => this.GroupService.getGroup(+params['id']))
			.subscribe(group => this.group = group);
	}
	
	goBack(): void {
  	this.location.back();
}

}