import { Component } from '@angular/core';
import { OneFriendComponent } from '../one-friend/one-friend.component';

@Component({
  selector: 'app-list-friends',
  imports: [OneFriendComponent],
  templateUrl: './list-friends.component.html',
  styleUrl: './list-friends.component.css'
})
export class ListFriendsComponent {
  listFriendsAuth : boolean = false
  listFriendsCreationStatus : string = "aucun ami !"
  listFriendsTextInput : string = ""

  constructor(){
    setTimeout(()=>{this.listFriendsAuth = true},3000)
  }
  onAddingFriends(): void {
    this.listFriendsCreationStatus = "votre ami a été ajouté";
  }
  onUpdateFriendsList(eventInput:Event):void{
    this.listFriendsTextInput = (<HTMLInputElement>eventInput.target).value;
  }
}
