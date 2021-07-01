import { Component, OnInit } from '@angular/core';
import { AuthorServiceService } from '../author-service.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-authors-add',
  templateUrl: './authors-add.component.html',
  styleUrls: ['./authors-add.component.css']
})
export class AuthorsAddComponent implements OnInit {

  constructor( private router:Router,public authorService:AuthorServiceService) { }

  ngOnInit(): void {
  }

  author={
    name:'',
    DOB:'',
    Book:'',
    image:''
  }

  AddAuthor()
  {    
    this.authorService.newAuthor(this.author);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/authors']);
  }


}
