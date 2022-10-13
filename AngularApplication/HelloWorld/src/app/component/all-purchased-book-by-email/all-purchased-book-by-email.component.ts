import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-all-purchased-book-by-email',
  templateUrl: './all-purchased-book-by-email.component.html',
  styleUrls: ['./all-purchased-book-by-email.component.css']
})
export class AllPurchasedBookByEmailComponent implements OnInit {
  email:string="";
  result:string=""

getAllPurchasedBook(){
 const observable= this.bookService.allPurchasedBook(this.email);
 observable.subscribe(response=>{
   console.log(response);
   this.bookService.sendData(response);
    this.router.navigate(['/booklist'])
 },
 error=>{
   console.error("something went wrong please try after sometime");
 }
 )
}


  constructor(private bookService:BookService,private router:Router) { }

  ngOnInit(): void {
  }

}
