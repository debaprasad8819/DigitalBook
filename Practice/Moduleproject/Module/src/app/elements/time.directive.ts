import { Directive,TemplateRef, ViewContainerRef,Input } from '@angular/core';

@Directive({
  selector: '[appTime]'
})
export class TimeDirective {

  constructor(
    private templateRef:TemplateRef<any>,
    private viewContainerRef:ViewContainerRef

  ) { }
  @Input('appTime') set render(times:number){
      this.viewContainerRef.clear();

      for(let i=0;i<times;i++){
          this.viewContainerRef.createEmbeddedView(this.templateRef,{})
      }
  }

}
