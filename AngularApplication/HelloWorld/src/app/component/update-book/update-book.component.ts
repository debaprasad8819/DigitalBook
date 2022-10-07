import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  result:string=""
  bookData$: any;
  book = {
    bookId:"",
    "title":"",
    publisher:"",
    content:"",
    catagory:"",
    author:"",
    price:0,
    isBlocked:false    
  }

  update(state: any){
   this.book.bookId=state.bookId;
   this.book.title=state.titile;
   this.book.publisher=state.publisher;
   this.book.content=state.content;
   this.book.catagory=state.catagory;
   this.book.author=state.author;
   this.book.price=state.price;
   this.book.isBlocked=state.isBlocked
   const observable = this.bookService.updateBook(this.book);
   console.log(observable)
    observable.subscribe(response=>{
      
      console.log(response);
      //document.write("<h1 color:green>Book updated successfully</h1>");
      this.result="Book updated successfully"
      this.router.navigate(['/search']);
    },
    error=>{
      console.error("Something is wrong please ");
      
    }
    )
  }

  constructor(private bookService:BookService,private router:Router) { }

  ngOnInit(): void {
    this.bookData$ = this.bookService.getData();
    
  }

}
