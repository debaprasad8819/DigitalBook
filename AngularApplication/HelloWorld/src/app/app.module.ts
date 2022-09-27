import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FromsComponent } from './component/froms/froms.component';
import { SignupComponent } from './component/signup/signup.component';
import { SigninComponent } from './component/signin/signin.component';
import { SearchBookComponent } from './component/search-book/search-book.component';
import { Route, RouterModule } from '@angular/router';
import { CreateBookComponent } from './component/create-book/create-book.component';

const routes:Route []= [
  {path:'search', component:SearchBookComponent},
  {path:'signup',component:SignupComponent},
  {path:'signin',component:SigninComponent},
  {path:'createBook', component:CreateBookComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FromsComponent,
    SignupComponent,
    SigninComponent,
    SearchBookComponent,
    CreateBookComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
