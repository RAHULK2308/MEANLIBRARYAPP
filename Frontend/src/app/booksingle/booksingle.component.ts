import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-booksingle',
  templateUrl: './booksingle.component.html',
  styleUrls: ['./booksingle.component.css']
})
export class BooksingleComponent implements OnInit {
 
  imageWidth: number = 80;
  imageMargin: number=2;

  book={
    title:'',
    author:'',
    genre:'',
    image:'',
  }
  

  constructor(private bookService:BooksService) { }

  ngOnInit(): void {
    let Bookid= localStorage.getItem("BookId");
    this.bookService.getBook(Bookid).subscribe((data)=>{
      this.book=JSON.parse(JSON.stringify(data));
  })
}
}
 

 
  

