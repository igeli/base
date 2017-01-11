import { Component } from '@angular/core';

export class Usuario{
	id: number
	nombre: string;
	apellido: string;
	usr: string;
}

@Component({
  selector: 'my-app',
  template: `<h1> {{title}}</h1>
  			<h2>Detalles de: {{usuario.nombre}} {{usuario.apellido}}</h2>
  			<div><label>Id: </label>{{usuario.id}}</div>
  			<div><label>Usuario: </label>{{usuario.usr}}</div>
			<div>
    			<label>Nombre: </label>
    			<input [(ngModel)]="usuario.nombre" placeholder="nombre">
  			</div>
  			<div>
    			<label>Apellido: </label>
    		<input [(ngModel)]="usuario.apellido" placeholder="apellido">
  			</div>

  			
  			`,
})

export class AppComponent  { 
	title = "Administración"
	usuario: Usuario = {
		id: 1,
		nombre: "Juan",
		apellido: "Gomez",
		usr: "jgomez"

	};
}
