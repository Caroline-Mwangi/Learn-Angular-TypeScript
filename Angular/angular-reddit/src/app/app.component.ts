import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  /* Generics: The collection (Array) is typed.
  Meaning the Array is a collection that will only hold objects of type Article. */

  articles: Article[]; // Another way to write this: Array<Article>

  constructor() {
    this.articles = [
      new Article('Angular', 'http://angular.io', 3),
      new Article('FullStack', 'http://fullstack.io', 5),
      new Article('Homepage', 'http://angular.io', 9),
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);

    /* Creating a new Article instance with the submitted title and URL
      - push the new instance to the array of Articles */
    this.articles.push(new Article(title.value, link.value, 0));

    // Clear the input fields
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
