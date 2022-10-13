import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-success-check-payment',
  templateUrl: './success-check-payment.component.html',
  styleUrls: ['./success-check-payment.component.css']
})
export class SuccessCheckPaymentComponent implements OnInit {
  bookData$: any;

  constructor(private router:Router,private bookService:BookService) { }

  ngOnInit(): void {
    this.bookData$ = this.bookService.getData();
  }

}
