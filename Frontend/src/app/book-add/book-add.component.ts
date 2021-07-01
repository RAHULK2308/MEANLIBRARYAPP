import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

 

  constructor(public bookService:BooksService, private router:Router) { }

  book={
    title:'',
    author:'',
    genre:'',
    image:'',
  }
  ngOnInit(): void {
  }
  AddBook()
  {    
    this.bookService.newBook(this.book);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/books']);
  }
}

