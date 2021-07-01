import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

import { AuthorsAddComponent } from './authors-add/authors-add.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsingleComponent } from './authorsingle/authorsingle.component';
import { AuthorupdateComponent } from './authorupdate/authorupdate.component';
import { BookAddComponent } from './book-add/book-add.component';
import { BooksComponent } from './books/books.component';
import { BooksingleComponent } from './booksingle/booksingle.component';
import { BookupdateComponent } from './bookupdate/bookupdate.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"books", component:BooksComponent},
  {path:"authors", component:AuthorsComponent},
  {path:"addBooks",
  canActivate:[AuthGuard] 
  ,component:BookAddComponent},
  {path:"addAuthors", 
  canActivate:[AuthGuard],
  component:AuthorsAddComponent},
  {path:"login", component:LoginComponent,
children:[
  {path:'signup', component:SignupComponent}
]},
  {path:"signup", component:SignupComponent},
  {path:"bookupdate", component:BookupdateComponent},
  {path:"Authorupdate",component:AuthorupdateComponent},
  {path:"SingleBook",component:BooksingleComponent},
  {path:"SingleAuthor", component:AuthorsingleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
