import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  bookData$: any;
  book = {
    bookId:"",
    "title":"",
    publisher:"",
    content:"",
    catagory:"",
    author:"",
    price:0,
    active:true,
    isBlocked:false    
  }
 
  constructor(private bookService:BookService, private router:Router,private activeRoute:ActivatedRoute) {
    
   }

   edit(book: any){
     alert("Edit work"+book.bookId)
    this.bookService.sendData(book);
    this.router.navigate(['/update'])
   }
  

  ngOnInit(): void {
    //console.log(window.history.state.data);
    this.bookData$ = this.bookService.getData();
  }

}
