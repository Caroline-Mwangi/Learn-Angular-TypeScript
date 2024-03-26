/* + Modules/Dependencies needed for the code
  + The structure of the import with {} represents destructuring.
*/
import { Component, OnInit } from '@angular/core';

/* + Declaring the component
+ Decorators: Metadata added to the code. 
In this case decorating HelloWorld as a component. */
@Component({
  /* + Selector: Indicates which DOM element this component will use.
      Gives ability to use the component in a markup using a <app-hello-world> tag. 
  */
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html', // File that contains the template to be loaded.
  styleUrl: './hello-world.component.css', // File that contains the styling for this component.
  // Style Encapsulation: Styles specified for a particular component only apply to that component.
})
export class HelloWorldComponent implements OnInit {
  /* Constructor: Function that is called when creating new instances of class component */
  constructor() {}

  ngOnInit() {}
}
