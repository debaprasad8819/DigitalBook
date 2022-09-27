import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const URL = 'http://localhost:9087/api/book/';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  // saveBook(book: { title: string; publisher: string; content: string; catagory: string; author: string; price: number; active: boolean; }) {
  //   const credential = sessionStorage.getItem("credentials");
  //   const token:any =JSON.parse(credential ||'{}')['accessToken'];
  //   return this.http.post(URL+'createBook', book, {
  //     headers: {
  //       Authorization: 'Bearer ' + token
  //     }
  //   })
  // }
  saveBook(book: { title: string; }) {
    const credential = sessionStorage.getItem("credentials");
    const token:any =JSON.parse(credential ||'{}')['accessToken'];
    return this.http.post(URL+'createBook', book, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }

  
  

  
  
  

  constructor(private http:HttpClient) { }
}
