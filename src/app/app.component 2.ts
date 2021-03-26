import { Component } from '@angular/core';

@Component({
  selector: 'my-app',  // couple cle valeur renvoi dans le balise e
  templateUrl: './app.component.html',//le template afficher lorsque l'on appelle l'app
  styleUrls: ['./app.component.css'] // le css qui sera chargé
})
export class AppComponent {
  title = 'todo-workshop';
}
