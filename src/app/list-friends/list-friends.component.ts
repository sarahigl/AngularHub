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
