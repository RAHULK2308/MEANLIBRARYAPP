import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})


export class BooksComponent implements OnInit {

  pageTitle:string='BOOKS LIST';
  imageWidth: number = 80;
  imageMargin: number=2;

  Books:any=[{
    title:'',
    author:'',
    genre:'',
    image:''
  }]
  constructor(public bookService:BooksService,private router:Router,public auth:AuthService) { }


  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data)=>{
      this.Books=JSON.parse(JSON.stringify(data));
  })
  }
  deleteBook(book:any)
  {
    this.bookService.deleteBook(book._id)
      .subscribe((data) => {
        this.Books= this.Books.filter(p => p !== book);
      })
}
editBook(book:any)
  {
    localStorage.setItem("editBookId", book._id.toString());
    this.router.navigate(['bookupdate']);

  }

  singleBook(book:any)
  {
    localStorage.setItem("BookId", book._id.toString());
    this.router.navigate(['SingleBook']);

  }

}
