// Isolating data structures to be used from the component code.
// In the MVC pattern, this would be the Model

export class Article {
  title: string;
  link: string;
  votes: number;

  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }

  /* The voting functions define what mutations happen in the model
  It allows voting separate from the view component */

  voteUp(): void {
    this.votes += 1;
  }

  voteDown(): void {
    this.votes -= 1;
  }

  /* domain() - a utility that extracts the domain from a url */
  domain(): string | null {
    try {
      const domainAndPath: string = this.link.split('//')[1];
      return domainAndPath.split('/')[0];
    } catch (err) {
      return null;
    }
  }
}
