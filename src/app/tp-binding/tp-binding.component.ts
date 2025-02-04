import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tp-binding',
  imports: [FormsModule],
  templateUrl: './tp-binding.component.html',
  styleUrl: './tp-binding.component.css'
})
export class TpBindingComponent {

  userName : string = "Add userName"

  resetInput():void {
    this.userName = "";
  }
  onUpdateUserName(eventInput:Event):void{
    console.log((<HTMLInputElement>eventInput.target).value);
    this.userName = (<HTMLInputElement>eventInput.target).value;
  }
}
