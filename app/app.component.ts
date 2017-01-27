import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <a routerLink="/"> Home </a>
    <a routerLink="/users"> Users </a>
    <a routerLink="/groups"> Groups </a>

    <router-outlet> </router-outlet>
  `
})

export class AppComponent {
  title = 'Menu';
}
