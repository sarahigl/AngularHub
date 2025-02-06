import { Component } from '@angular/core';
import { FormDataComponent } from "../form-data/form-data.component";
import { UserDataComponent } from "../user-data/user-data.component";
import { FormsModule } from '@angular/forms';
import { User } from '../user.interface';

@Component({
  selector: 'app-parent-form-data',
  imports: [FormDataComponent, UserDataComponent, FormsModule],
  templateUrl: './parent-form-data.component.html',
  styleUrl: './parent-form-data.component.css'
})
export class ParentFormDataComponent {
  utilisateur: User = {
    name: 'Sarah',
    age:4
  }
  updateUser(event:User){
    this.utilisateur.name=event.name;
    this.utilisateur.age=event.age;
  }
}
