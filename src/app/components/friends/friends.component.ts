import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  @Input() isFriendNavOpen:boolean=false;
  Friends = new Array(20);
  constructor() { }

  ngOnInit(): void {
  }

  FriendNav(){
    this.isFriendNavOpen=!this.isFriendNavOpen;
  }

}
