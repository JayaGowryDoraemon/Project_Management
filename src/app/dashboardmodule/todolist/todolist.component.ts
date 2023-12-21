import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';

// interface Card {
//   backgroundColor: string;
//   title:string;
//   subtitle:number;
//   content:string;
//   class:string;
//   isActive: boolean;

// }

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent {
  cards :any =[];
  shouldApplyRedBackground: boolean = false;
  constructor(private elementRef: ElementRef) {
   
    // You can also perform various operations on the classList, like adding or removing classes.
  }
  ngOnInit(){
    this.cards = [  { title: 'TOTAL PROJECT', subtitle: 600, content: 'Content 1' , class: 'card1'},

    { title: 'OPEN', subtitle:  100, content: 'Content 2' , class: 'card2'},
  
    { title: 'INPROGRESS', subtitle:  200, content: 'Content 3' , class: 'card3'},
  
    { title: 'CLOSED', subtitle: 300, content: 'Content 4' , class: 'card4'}];

   
}
onCardClick(card:any){
  this.shouldApplyRedBackground = !this.shouldApplyRedBackground;
//   const element = this.elementRef.nativeElement;
//   // Now, you can access the class list of the element.
//   const classList = element.classList;
//   document.querySelectorAll('.card').forEach(card => {
//     card.addEventListener('click', function() {
//       // Remove the active class from all cards
//       document.querySelectorAll('.card').forEach(c => {
//         c.classList.remove('active');
//       });
  
//       // Add the active class to the clicked card
//     classList.add('active');
//     });
//   });
}

}
