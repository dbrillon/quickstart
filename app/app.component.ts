import { Component } from '@angular/core';
import { Hero } from './hero';
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero.name}}</h2>
    <p>Heroes:</p>
    <ul>
        <li *ngFor="let hero of heroes">
            {{hero.name}} ({{hero.id}})
        </li>
    </ul>

    <p *ngIf="heroes.length > 3">There are many heroes!</p>

     <input #newHero
      (keyup.enter)="addHero(newHero.value)"
      (blur)="addHero(newHero.value); newHero.value='' ">

    <button (click)=addHero(newHero.value)>Add</button>
    `
})   
export class AppComponent {
  private _id: number = 100;
  title = 'Tour of Heroes';

  heroes = [
      new Hero(1,'Windstorm'),
      new Hero(13, 'Bombasto'),
      new Hero(15, 'Magneta'), 
      new Hero(20,'Tornado')
    ];
  myHero = this.heroes[0];

  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(new Hero(this._id++, newHero));
    }
  }

}