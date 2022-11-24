import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private emement:ElementRef) { 
    
  }

  @Input('appClass') set backGroundColour(color:string){
    this.emement.nativeElement.style.backgroundColor=color;
  }

  //Instade of [ngClass] if we apply appClass]
  // @Input('appClass') set className(classObj:any){
    //for (let key in classObj) {
       //if(classObj[key]){
       // this.emement.nativeElement.clasList.add(key);
      // }else{
        // this.emement.nativeElement.clasList.remove(key);
     // }
    //}
  //   
  // }

}
