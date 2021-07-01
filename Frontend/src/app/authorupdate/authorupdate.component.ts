import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorServiceService } from '../author-service.service';

@Component({
  selector: 'app-authorupdate',
  templateUrl: './authorupdate.component.html',
  styleUrls: ['./authorupdate.component.css']
})
export class AuthorupdateComponent implements OnInit {

  author={
    name:'',
    DOB:'',
    Book:'',
    image:''
  }

  constructor(public authorService:AuthorServiceService, private router:Router) { }

  ngOnInit(): void {
    let Authorid= localStorage.getItem("editAuthorId");
    this.authorService.getAuthor(Authorid).subscribe((data)=>{
      this.author=JSON.parse(JSON.stringify(data));
    })
  }

  editBook()
  {    
    this.authorService.editAuthor(this.author);   
    alert("Success");
    this.router.navigate(['authors']);
  }


}
