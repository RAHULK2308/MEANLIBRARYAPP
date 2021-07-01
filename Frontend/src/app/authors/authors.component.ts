import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthorServiceService } from '../author-service.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  pageTitle:string='AUTHORS LIST';
  imageWidth: number = 80;
  imageMargin: number=2;

  Authors:any=[{
    name:'',
    DOB:'',
    Book:'',
    image:''
  }]
  constructor(public authorService:AuthorServiceService, private router:Router, public auth:AuthService) { }

  ngOnInit(): void {
    this.authorService.getAuthors().subscribe((data)=>{
      this.Authors=JSON.parse(JSON.stringify(data));
    })
  }

 deleteAuthor(author:any)
  {
    this.authorService.deleteAuthor(author._id)
      .subscribe((data) => {
        this.Authors= this.Authors.filter(p => p !== author);
      })
}
editAuthor(author:any)
  {
    localStorage.setItem("editAuthorId", author._id.toString());
    this.router.navigate(['Authorupdate']);

  }
  singleAuthor(author:any)
  {
    localStorage.setItem("AuthorId", author._id.toString());
    this.router.navigate(['SingleAuthor']);

  }
  
}



