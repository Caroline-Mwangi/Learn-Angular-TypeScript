import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.css',
})
export class UserItemComponent implements OnInit {
  /* Introduce name as a new input property.
  This makes it possible to reuse the component for different users
  (Keeping the same markup, logic and styles) */

  @Input() name: string | undefined;

  constructor() {
    /* Setting the name property: 
      Whenever a new instance of the component is created, set the name.
    */
  }

  ngOnInit() {}
}
