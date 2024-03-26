import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.css',
})
export class ArticleComponent implements OnInit {
  /* + cssClass: the CSS to be applied to the 'host' of the component 
  ('host' meaning the element into which the component template is rendered)
  + HostBinding Decorator can be used to set properties on the host element.*/

  @HostBinding('attr class') cssClass = 'row';

  // Input decorator allows passing an Article as a "parameter" to the component
  @Input() article!: Article;

  constructor() {}

  /* The voting functions on this file relate to the component view */

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

  ngOnInit() {}
}
