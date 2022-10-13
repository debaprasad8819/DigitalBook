import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  role:string=""
  result:boolean=false
  
  book = {
    "title":"The perfect",
    publisher:"MNOr",
    content:"HHHHHHHHHHHHH",
    catagory:"Story",
    author:"M N RAO",
    price:39,
    active:true,
    isBlocked:false    
  }

  
  saveBook(){
    
    const observable= this.bookService.saveBook(this.book);
    observable.subscribe(response=>{
      console.log(response);
    },
    error=>{
      console.error("something went wrong please check it");
    })
  }

  constructor(private bookService:BookService) { }

  ngOnInit(): void {
    const credential = sessionStorage.getItem("credentials");
    const token:any = JSON.parse(credential || '{}')['roles'];
    this.role=token[0]
    if(this.role!='ROLE_READER'){
      this.result=true
    }
  }

}
