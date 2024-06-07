import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculator';
  result:string = "";
  
  add(firstNumber:string, secondNumber:string)
  {
    this.result = (Number(firstNumber)+Number(secondNumber)).toString();
  }

  subs(firstNumber:string, secondNumber:string)
  {
    this.result = (Number(firstNumber)-Number(secondNumber)).toString();
  }

  mult(firstNumber:string, secondNumber:string)
  {
    this.result = (Number(firstNumber)*Number(secondNumber)).toString();
  }
  
  div(firstNumber:string, secondNumber:string)
  {
    this.result = (Number(firstNumber)/Number(secondNumber)).toString();
  }

}
