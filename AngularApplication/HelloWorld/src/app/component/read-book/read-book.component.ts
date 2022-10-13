import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { observable } from 'rxjs';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-read-book',
  templateUrl: './read-book.component.html',
  styleUrls: ['./read-book.component.css']
})
export class ReadBookComponent implements OnInit {
  user = {
    email:"debaprasad59@gmail.com",
    bookId:"56"
  }
  readBook(){
    alert("this user bookId::"+this.user.bookId+"BookId::::  "+this.user.email);
    const observable= this.bookService.readBook(this.user);
    observable.subscribe(response=>{
      console.log(response);
      
      this.router.navigate(['/success']);
      this.bookService.sendData(response);
    },
    error=>{
      console.error("something went wrong plase try after some time");
    }
    )
  }

  constructor(private bookService:BookService,private router:Router) { }

  ngOnInit(): void {
  }

}
