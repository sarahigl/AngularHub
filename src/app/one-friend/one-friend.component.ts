import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-one-friend',
  imports: [CommonModule],
  templateUrl: './one-friend.component.html',
  styleUrl: './one-friend.component.css'
})
export class OneFriendComponent {
  oneFriendId : number = 3
  oneFriendName : string = "Celestine Lintestine"
  oneFriendAge: number = 3
  oneFriendStatus : string = 'ON'
  oneFriendReputation : string = 'Menteuse - Voleuse'
  oneFriendBio : string = "Celestine Lintestine graphiste pianiste et dentiste"
  oneFriendXss : string = "<script>alert('Hello, XSS')</script>"

  constructor(){
    Math.random() > 0.5 ? this.oneFriendStatus = "ON" : this.oneFriendStatus = "OFF"
  }
  getColor(): string{
    if(this.oneFriendStatus == "ON"){
      return "green";
    }
    return "red";
  }
  getOneFriendStatus() :string{
    if(this.oneFriendStatus == 'ON'){
      return `${this.oneFriendStatus}`;
    }
    return 'OFF'
  }
}
