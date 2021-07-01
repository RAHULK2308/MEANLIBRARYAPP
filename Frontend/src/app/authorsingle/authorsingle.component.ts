import { Component, OnInit } from '@angular/core';
import { AuthorServiceService } from '../author-service.service';

@Component({
  selector: 'app-authorsingle',
  templateUrl: './authorsingle.component.html',
  styleUrls: ['./authorsingle.component.css']
})
export class AuthorsingleComponent implements OnInit {

  
  imageWidth: number = 80;
  imageMargin: number=2;
  
  Authors:any={
    name:'',
    DOB:'',
    Book:'',
    image:''
  }

  constructor(private authorService:AuthorServiceService) { }

  ngOnInit(): void {
    let Authorid= localStorage.getItem("AuthorId");
    this.authorService.getAuthor(Authorid).subscribe((data)=>{
      this.Authors=JSON.parse(JSON.stringify(data));
  })
}
  

}
