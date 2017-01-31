import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService} from './user.service';
import { User } from './user'



@Component({
  moduleId: module.id,
  selector: 'my-users',
  templateUrl: 'templates/users.component.html',
  styleUrls: [ 'templates/users.component.css' ],
})

export class UsersComponent implements OnInit { 
	//usuarios = User[]; //Si inicializo usuarios, no funciona
  title = "Usuarios";
  selectedUser : User;

  constructor(
    private router: Router,
    private userService: UserService){};
  
  getUsers(): void{
    //this.usuarios = this.userService.getUsers();
    this.userService.getUsers().then(usuarios => this.usuarios = usuarios);
  };

  ngOnInit():void{
    this.getUsers();
  };
    
  onSelect(user: User){
  this.selectedUser= user;
  }

  gotoDetail(): void {
  this.router.navigate(['/user', this.selectedUser.id]);
  }

  add(name: string):void{
    name = name.trim();
    if (!name) { return; }
    this.userService.create(name)
      .then(user => {
        this.usuarios.push(user);
        this.selectedUser = null;
      });
  }
      
}
