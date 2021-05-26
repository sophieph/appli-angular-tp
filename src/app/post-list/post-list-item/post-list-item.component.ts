import { Component, Input, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { Post } from '../../model/post.model';
@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postCreatedAt: number;
  @Input() postLoveIt: number;
  @Input() post: Post;

  constructor() { }

  ngOnInit(): void {
  }

  getColor(loveIt : number) {
    if (loveIt >= 0) {
      return '#e1ecd0'; 
    } 
    return '#db8d8d';
  }
  onAddLoveIt() {
    console.log('On aime +');
    this.postLoveIt++;
    this.post.loveIt = this.postLoveIt;
    console.log(this.postLoveIt);

  }

  onRemoveLoveIt() {
    console.log('On aime -');
    this.postLoveIt--;
    this.post.loveIt = this.postLoveIt;
    console.log(this.postLoveIt);
  }

}
