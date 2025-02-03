import { Component } from '@angular/core';

@Component({
  selector: 'app-one-friend',
  imports: [],
  templateUrl: './one-friend.component.html',
  styleUrl: './one-friend.component.css'
})
export class OneFriendComponent {
  oneFriendId : number = 3
  oneFriendName : string = "Celestine Lintestine"
  oneFriendAge: number = 3
  oneFriendStatus : string = 'Online'
  oneFriendReputation : string = 'Menteuse - Voleuse'
  oneFriendBio : string = "Celestine Lintestine graphiste pianiste et dentiste"
  oneFriendXss : string = "<script>alert('Hello, XSS')</script>"

  getOneFriendStatus() :string{
    if(this.oneFriendStatus == 'Online'){
      return `${this.oneFriendStatus}`;
    }
    return 'offline'
  }
}
