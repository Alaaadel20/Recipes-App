import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})
export class HeaderComponent {
    //create event object and add output to pass it to app component:
   @Output() featureSelected= new EventEmitter<string>();
onSelect(feature: string){
    //make the value of the event= feature which is the data injected for element in template ('recipe' & 'shopping-list')
this.featureSelected.emit(feature)

}
}