import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent implements OnInit {
  names: string[];

  constructor() {
    this.names = ['Dave', 'Mary', 'Jane'];
  }

  ngOnInit() {}
}
