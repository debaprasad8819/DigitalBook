import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-buy-book',
  templateUrl: './buy-book.component.html',
  styleUrls: ['./buy-book.component.css']
})
export class BuyBookComponent implements OnInit {
  result:string=""
  user={
    username:"debaprasad89",
    email:"debaprasad89@gmail.com",
    bookId:"11"
  }

  buyBook(){
    const observable= this.bookService.buyBook(this.user);
    observable.subscribe(response=>{
      console.log(response);
      //this.router.navigate(['/search']);
      this.result="Book purchased Successfully"
    },
    error=>{
      console.error("Some thing went wrong please try after some time");
    }
    )
  }

  constructor(private bookService:BookService,private router:Router) { }

  ngOnInit(): void {
  }

}
