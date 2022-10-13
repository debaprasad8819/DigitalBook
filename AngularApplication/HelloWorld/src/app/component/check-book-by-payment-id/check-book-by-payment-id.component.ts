import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-check-book-by-payment-id',
  templateUrl: './check-book-by-payment-id.component.html',
  styleUrls: ['./check-book-by-payment-id.component.css']
})
export class CheckBookByPaymentIdComponent implements OnInit {
 user= {
   email:"",
   paymentId:""
 }

 checkByPaymentId(){
   const observable= this.bookService.checkByPaymentId(this.user);
   observable.subscribe(response=>{
    console.log(response);
    this.bookService.sendData(response);
     this.router.navigate(['/successPayment'])
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
