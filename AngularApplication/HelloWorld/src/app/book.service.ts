import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const URL = 'http://localhost:9087/api/book/';
const credential = sessionStorage.getItem("credentials");
const token:any = JSON.parse(credential || '{}')['accessToken'];
@Injectable({
  providedIn: 'root'
})
export class BookService {
  

  allPurchasedBook(email: string) {
    return this.http.get(URL+'/allPurchasedBooks/'+email,{
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
    }
 
  searchBook(book: { catagory: string; author: string; price: number; }) {
    
    const credential = sessionStorage.getItem("credentials");
    const token:any = JSON.parse(credential || '{}')['accessToken'];
    return this.http.get(URL+'searchBooks'+'?catagory='+book.catagory+'&author='+book.author+'&price='+book.price,{
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
  }

  saveBook(book: { title: string; publisher: string; content: string; catagory: string; author: string; price: number; active: boolean; isBlocked: boolean;}) {
    const credential = sessionStorage.getItem("credentials");
    const token:any =JSON.parse(credential ||'{}')['accessToken'];
    return this.http.post(URL+'createBook', book, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }
  // saveBook(book: { title: string; }) {
  //   const credential = sessionStorage.getItem("credentials");
  //   const token:any =JSON.parse(credential ||'{}')['accessToken'];
  //   return this.http.post(URL+'createBook', book, {
  //     headers: {
  //       Authorization: 'Bearer ' + token
  //     }
  //   })
  // }

  
  

  
  
  

  constructor(private http:HttpClient) { }
}
