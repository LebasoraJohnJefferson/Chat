import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() follow:string='follow';
  constructor() { }

  ngOnInit(): void {
  }

  isFollow(){
    if(this.follow=='follow') this.follow='followed';
    else this.follow='follow';
  }

}