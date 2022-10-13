import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-refund',
  templateUrl: './refund.component.html',
  styleUrls: ['./refund.component.css']
})
export class RefundComponent implements OnInit {
 result:string=""
  user={
    email:"debaprasad89@gmail.com",
    bookId:"11",
    paymentId:"28",
    refundAmount:"4"
  }

  refund(){
    const observable = this.bookService.refundBook(this.user);
    console.log(observable)
     observable.subscribe(response=>{
       
       console.log(response);
       this.result="Refund Request generated successfully"
       this.router.navigate(['/successRefund']);
     },
     error=>{
       console.error("Something is wrong please ");
       
     }
     )
  }
  constructor(private bookService:BookService,private router:Router) { }

  ngOnInit(): void {
  }

}
