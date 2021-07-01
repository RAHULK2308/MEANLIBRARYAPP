import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { BooksComponent } from './books/books.component';
import { AuthorsComponent } from './authors/authors.component';
import { BookAddComponent } from './book-add/book-add.component';
import { AuthorsAddComponent } from './authors-add/authors-add.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BookupdateComponent } from './bookupdate/bookupdate.component';
import { AuthorupdateComponent } from './authorupdate/authorupdate.component';

import { BooksService } from './books.service';
import { AuthorServiceService } from './author-service.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { InterceptorService } from './interceptor.service';
import { BooksingleComponent } from './booksingle/booksingle.component';
import { AuthorsingleComponent } from './authorsingle/authorsingle.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    BooksComponent,
    AuthorsComponent,
    BookAddComponent,
    AuthorsAddComponent,
    LoginComponent,
    SignupComponent,
    BookupdateComponent,
    AuthorupdateComponent,
    BooksingleComponent,
    AuthorsingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
    
  ],
  providers: [BooksService,AuthorServiceService,AuthService,AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

