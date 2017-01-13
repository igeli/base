import { Component } from '@angular/core';

import { User } from './user'


const USERS: User[] = [
  { id: 1, usr: 'jgomez', nombre: 'Juan', apellido: 'Gomez' },
  { id: 2, usr: 'jperez', nombre: 'Gorge', apellido: 'Perez' },
  { id: 3, usr: 'igeli', nombre: 'Ignacio', apellido: 'Gelis' },
  { id: 4, usr: 'uber', nombre: 'Uriel', apellido: 'Ber' },
  { id: 5, usr: 'mgonzalez', nombre: 'Maria', apellido: 'Gonzalez' },
  { id: 6, usr: 'astigarribia', nombre: 'Adrian', apellido: 'Stogarribia' },
  { id: 7, usr: 'rpasarela', nombre: 'Roberto', apellido: 'Pasarela' },
  { id: 8, usr: 'aleschuk', nombre: 'Ariel', apellido: 'Leschuk' },
  { id: 9, usr: 'hpotter', nombre: 'Harry', apellido: 'Potter' },
  { id: 10, usr: 'dmalfoy', nombre: 'Draco', apellido: 'Malfoy' }
];



@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'templates/app.component.html',
  styleUrls: [ 'templates/app.component.css' ],
})

export class AppComponent  { 
	title = "Administración"	
  usuarios = USERS;
  selectedUser : User;
  onSelect(user: User){
  this.selectedUser= user;
  }
}
