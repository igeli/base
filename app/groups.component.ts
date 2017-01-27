import { Component, OnInit } from '@angular/core';
import { GroupService } from './group.service';
import { Group }	from './group';


@Component({
	moduleId: module.id,
	selector: 'my-groups',
	templateUrl: 'templates/groups.component.html',
	styleUrls: [ 'templates/users.component.css' ],
})

export class GroupsComponent implements OnInit {

	title = "Grupos";
  	g//roups = Group[];
  	selectedGroup : Group;

	constructor(private groupService: GroupService){};
  
  	getGroups(): void{
    	//this.usuarios = this.userService.getUsers();
    	this.groupService.getGroups().then(groups => this.groups = groups);
  	};

  	ngOnInit():void{
    	this.getGroups();
  	};
    
  	onSelect(group: Group){
  		this.selectedGroup= group;
  	}
}