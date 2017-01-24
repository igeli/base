import { Component, OnInit } from '@angular/core';
import { UserService} from './user.service';
import { User } from './user'



@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'templates/app.component.html',
  styleUrls: [ 'templates/app.component.css' ],
  providers: [ UserService ],

})

export class AppComponent implements OnInit { 
	title = "Administración";
  //usuarios = User[]; //Si inicializo usuarios, no funciona
  selectedUser : User;

  constructor(private userService: UserService){};
  
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
    
}
