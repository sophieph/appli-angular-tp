import { Component } from '@angular/core';
import { Post } from './model/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appli';

  post1 = new Post('Titre 1', 'Voici le contenu numero 1', '4', '25/06/2020');
  post2 = new Post('Titre 2', 'Voici le contenu numero 2', '-3', '10/08/2009');
  post3 = new Post('Titre 3', 'Voici le contenu numero 3', '4', '30/07/1995');
  posts = [
    this.post1, this.post2, this.post3
  ]
  
}
