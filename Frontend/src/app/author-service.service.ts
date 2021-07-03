import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorServiceService {
  server_address:string='/api';
  // server_address:string="http://localhost:3000"; for development
  item= {
    name :'',
    DOB:'',
    Book:'',
    image:''}

  constructor(private http:HttpClient) { }
  getAuthors(){
    return this.http.get(`${this.server_address}/authors`);
  }
  getAuthor(id:any){
    return this.http.get(`${this.server_address}/authors/`+id);
  }
  newAuthor(item:any)
  {   
    return this.http.post(`${this.server_address}/authors/insert`,{"authors":item})
    .subscribe(data =>{console.log(data)})
  }

  deleteAuthor(id:any)
  {

    return this.http.delete(`${this.server_address}/authorsremove/`+id)

  }
  editAuthor(author:any)
  {
    console.log('client update')
    return this.http.put(`${this.server_address}/authors/update`,author )
    .subscribe(data =>{console.log(data)})
  }

}
