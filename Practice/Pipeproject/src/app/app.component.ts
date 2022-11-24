import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage=0;
 images=[
   {
   title : 'At the Beach',
   url: 'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
   },
   {
    title : 'At the City',
    url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
   {
    title : 'At the Forest',
    url: 'https://media.istockphoto.com/photos/sunlight-in-thick-forest-picture-id1291476539?b=1&k=20&m=1291476539&s=170667a&w=0&h=1IYH84fC2TG4Av6a-fi9AoZV5P5UxaobAA_2zWPiY14='
    },
    {
      title : 'At the Beach',
      url: 'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
      },
      {
        title : 'At the Beach',
        url: 'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
        },
    {
      title : 'At the Forest',
      url: 'https://media.istockphoto.com/photos/sunlight-in-thick-forest-picture-id1291476539?b=1&k=20&m=1291476539&s=170667a&w=0&h=1IYH84fC2TG4Av6a-fi9AoZV5P5UxaobAA_2zWPiY14='
      },
      {
        title : 'At the City',
        url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
        },
    {
      title : 'At the City',
      url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
      },
      {
        title : 'At the Forest',
        url: 'https://media.istockphoto.com/photos/sunlight-in-thick-forest-picture-id1291476539?b=1&k=20&m=1291476539&s=170667a&w=0&h=1IYH84fC2TG4Av6a-fi9AoZV5P5UxaobAA_2zWPiY14='
        },
      {
        title : 'At the Snow',
        url: 'https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c25vd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
          title : 'At the Forest',
          url: 'https://media.istockphoto.com/photos/sunlight-in-thick-forest-picture-id1291476539?b=1&k=20&m=1291476539&s=170667a&w=0&h=1IYH84fC2TG4Av6a-fi9AoZV5P5UxaobAA_2zWPiY14='
          }

 ];
 checkTheElement(value:number){
      return Math.abs(this.currentPage-value)<5;
 }
}
