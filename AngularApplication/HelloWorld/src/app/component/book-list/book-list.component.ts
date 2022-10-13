import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit {

 role:string=""
 result:boolean=false
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
     alert("Edit work"+this.role)
    this.bookService.sendData(book);
    this.router.navigate(['/update'])
   }
  

  ngOnInit(): void {
    const credential = sessionStorage.getItem("credentials");
    const token:any = JSON.parse(credential || '{}')['roles'];
    this.role=token[0]
    if(this.role!='ROLE_READER'){
      this.result=true
    }
    this.bookData$ = this.bookService.getData();
  }

}
