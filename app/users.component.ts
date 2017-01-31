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

  add(ap: string, name:string, usr:string):void{
    name = name.trim();
    if (!name||!ap) { return; }
    this.userService.create(ap, name, usr)
      .then(user => {
        this.usuarios.push(user);
        this.selectedUser = null;
      });
  }

  delete (user: User): void{
    this.userService
    .delete(user.id)
    .then(()=> {
      this.usuarios = this.usuarios.filter(u => u !== user);
      if (this.selectedUser === user) { this.selectedUser = null; }
    });
  }
      
}
