import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorServiceService {
  item= {
    name :'',
    DOB:'',
    Book:'',
    image:''}

  constructor(private http:HttpClient) { }
  getAuthors(){
    return this.http.get("http://localhost:3000/authors");
  }
  getAuthor(id:any){
    return this.http.get("http://localhost:3000/authors/"+id);
  }
  newAuthor(item:any)
  {   
    return this.http.post("http://localhost:3000/authors/insert",{"authors":item})
    .subscribe(data =>{console.log(data)})
  }

  deleteAuthor(id:any)
  {

    return this.http.delete("http://localhost:3000/authorsremove/"+id)

  }
  editAuthor(author:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:3000/authors/update",author )
    .subscribe(data =>{console.log(data)})
  }

}
