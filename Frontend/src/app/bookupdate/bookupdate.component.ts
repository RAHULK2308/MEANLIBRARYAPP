import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../books.service';



@Component({
  selector: 'app-bookupdate',
  templateUrl: './bookupdate.component.html',
  styleUrls: ['./bookupdate.component.css']
})
export class BookupdateComponent implements OnInit {

  
  book={
    title:'',
    author:'',
    genre:'',
    image:'',
  }

  constructor(private bookService:BooksService, private router:Router) { }

  ngOnInit ():void  {
    let Bookid= localStorage.getItem("editBookId");
    this.bookService.getBook(Bookid).subscribe((data)=>{
      this.book=JSON.parse(JSON.stringify(data));
    })
  }
 
  editBook()
  {    
    this.bookService.editBook(this.book);   
    alert("Success");
    this.router.navigate(['books']);
  }

  
}
