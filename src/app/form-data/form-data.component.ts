import { Component, EventEmitter, Input, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../user.interface';

@Component({
  selector: 'app-form-data',
  imports: [FormsModule],
  templateUrl: './form-data.component.html',
  styleUrl: './form-data.component.css'
})
export class FormDataComponent {
  newName: string ='';
  newAge: number=0;
  @Output() userDataEmitMaj = new EventEmitter<User>();
  submitData(){
    const userData: User = {
      name: this.newName,
      age: this.newAge || 0
    };
    //! Emmission de notre event quand on click
    this.userDataEmitMaj.emit(userData);
  }
}
