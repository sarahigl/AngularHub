import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { User } from '../user.interface';
//active user
@Component({
  selector: 'app-user-data',
  imports: [],
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.css'
})
export class UserDataComponent {
 @Input() userData!:User;

}
