import { Component } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
  
     <h4>
     A Random Number: {{random}} 
     </h4> 
   
  `,
  styles: [
  ]
})
export class SquareComponent {
  random = Math.random()

  constructor(){
    setInterval(()=> this.random = Math.random(), 1000)
  }
  
}
