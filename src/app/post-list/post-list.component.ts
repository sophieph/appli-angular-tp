import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../model/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  // @Input() posts: Post[];
  post1 = new Post('Titre 1', 'Voici le contenu numero 1', '4', '25/06/2020');
  post2 = new Post('Titre 2', 'Voici le contenu numero 2', '-3', '10/08/2009');
  post3 = new Post('Titre 3', 'Voici le contenu numero 3', '4', '30/07/1995');
  posts = [
    this.post1, this.post2, this.post3
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
