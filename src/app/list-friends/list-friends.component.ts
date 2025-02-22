import { Component } from '@angular/core';
import { OneFriendComponent } from '../one-friend/one-friend.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-friends',
  imports: [OneFriendComponent, FormsModule, CommonModule],
  templateUrl: './list-friends.component.html',
  styleUrl: './list-friends.component.css'
})
export class ListFriendsComponent {
  listFriendsAuth : boolean = false
  listFriendsCreationStatus : string = "aucun ami !"
  listFriendsTextInput : string = ""
  listFriendsCreated:boolean=false;
  listFriendsDisplay:boolean=false;
  listFriendsTab: { name: string; age: number; email: string }[] = [
    { name: 'Alice', age: 30, email: 'alice@example.com' },
    { name: 'Bob', age: 25, email: 'bob@example.com' },
    { name: 'Charlie', age: 35, email: 'charlie@example.com' }
  ];

  constructor(){
    setTimeout(()=>{this.listFriendsAuth = true},3000)
  }
  onAddingFriends(): void {
    this.listFriendsCreationStatus = "votre ami a été ajouté";
  }
  onUpdateFriendsList(eventInput:Event):void{
    console.log((<HTMLInputElement>eventInput.target).value);
    this.listFriendsTextInput = (<HTMLInputElement>eventInput.target).value;
  }
}
