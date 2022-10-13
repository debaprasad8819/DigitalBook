import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  bookData$: any;

  constructor(private router:Router,private bookService:BookService) { }

  ngOnInit(): void {
    this.bookData$ = this.bookService.getData();
  }

}
