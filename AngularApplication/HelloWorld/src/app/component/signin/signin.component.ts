import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
 
  imageUrl:string ='assets/online.jpeg';
  user = {
    "username":"debaprasad98",
     "password":"debaprasad98"
  }
  
  submitted = false;

  onSubmit() { this.submitted = true; }


  
 
  constructor(private userService:UserService,private router:Router) {
    
  }
   
  signin(){
    if((this.user.username && this.user.password)){ 
   const observable  =  this.userService.signIn(this.user);
   observable.subscribe(
   response=>{
     console.log(response);
     sessionStorage.setItem("credentials",JSON.stringify(response));
     this.router.navigate(['/search']);
     
   },
   error=>{
     console.error("some thing went wrong please try after some time");
   }
   
   )
 }else{
   alert("Username password should not be empty")
 }
 }

  ngOnInit(): void {
  }


}
