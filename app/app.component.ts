import { Component } from '@angular/core';

export class User{
	id: number
	nombre: string;
	apellido: string;
	usr: string;
}

const USERS: Users[] = [
  { id: 1, usr: 'jgomez', nombre: 'Juan', apellido: 'Gomez' },
  { id: 2, usr: 'jperez', nombre: 'Gorge', apellido: 'Perez' },
  { id: 3, usr: 'igeli', nombre: 'Ignacio', apellido: 'Gelis' },
  { id: 4, usr: 'uber', nombre: 'Uriel', apellido: 'Ber' },
  { id: 5, usr: 'mgonzalez', nombre: 'Maria', apellido: 'Gonzalez' },
  { id: 6, usr: 'astigarribia', nombre: 'Adrian', apellido: 'Stogarribia' },
  { id: 7, usr: 'rpiannarelli', nombre: 'Roberto', apellido: 'Piannarelli' },
  { id: 8, usr: 'aleschuk', nombre: 'Ariel', apellido: 'Leschuk' },
  { id: 9, usr: 'hpotter', nombre: 'Harry', apellido: 'Potter' },
  { id: 10, usr: 'dmalfoy', nombre: 'Draco', apellido: 'Malfoy' }
];



@Component({
  selector: 'my-app',
  template: `<h1> {{title}}</h1>

            <h2> Lista de usuarios </h2> 
            <ul class="users">
              <li *ngFor="let user of usuarios" (click)="onSelect(user)">
              <span class="badge">{{user.id}}</span> {{user.nombre}} {{user.apellido}}
              </li>
            </ul>
      			<h2>Detalles de: {{selectedUser.nombre}} {{selectedUser.apellido}}</h2>
  		    	<div><label>Id: </label>{{selectedUser.id}}</div>
  			    <div><label>usuarios: </label>{{selectedUser.usr}}</div>
	  		    <div>
      			  <label>Nombre: </label>
      			  <input [(ngModel)]="selectedUser.nombre" placeholder="nombre">
  			    </div>
  			    <div>
      			  <label>Apellido: </label>
      		    <input [(ngModel)]="selectedUser.apellido" placeholder="apellido">
  			    </div>
  			`,
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .users {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .users li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .users li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .users li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .users .text {
    position: relative;
    top: -3px;
  }
  .users .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]

})

export class AppComponent  { 
	title = "Administración"	
  usuarios = USERS;
  selectedUser : User = { id: 0 , usr: '', nombre: '', apellido: '' }


  onSelect(user: User){
  this.selectedUser= user;
  }
}
