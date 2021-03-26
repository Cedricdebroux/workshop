import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { TodoComponent } from "./todo/todo.component";
import { HeaderComponent } from './header/header.component';
import { FormsModule } from "@angular/forms";
import { TodoService } from "./services/todo.service";
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SingleTodoComponent } from './single-todo/single-todo.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from "@angular/router";
import { AddTodoComponent } from './todo/add-todo/add-todo.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/add-user/add-user.component';

export const ROUTES : Routes = [
  {path:'home', component: HomeComponent},
  {path:'todos', component: TodoComponent},
  {path:'not-found', component: NotFoundComponent}, // En cas de demande d'une page qui n'existe pas.
  {path:'contact', component: ContactComponent},
  {path:'add-todo', component: AddTodoComponent},
  {path:'single-todo/:id', component: SingleTodoComponent},//permet de renvoyer vers le detail de la tâche à effectuer en fonction de l'id ...
  {path:'', component: HomeComponent},//page qui est afficher par defaut lorque l'on arrive sur l'api.
  {path:'**', pathMatch:'full', redirectTo: 'not-found'}, //Les ** signifie que si ce n'est aucune des routes ça renvoie sur la page d'erreur (not-found)
];

@NgModule({
  declarations:[
    AppComponent,
    TodoComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    SingleTodoComponent,
    ContactComponent,
    AddTodoComponent,
    UsersComponent,
    AddUserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),//important ne pas oublier de declarer et de boucler sur les rotes mises en place.
  ],
  providers:[TodoService],
  bootstrap:[AppComponent]
})
export class AppModule{}
