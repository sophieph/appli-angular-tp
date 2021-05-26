export class Post {

    title: string;
    content: string;
    loveIt: number;
    created_at: number;
  
    constructor( title: string,  content: string,  loveIt?: any, created_at?: any) {
      this.title = title;
      this.content = content;
      this.loveIt = loveIt;
      this.created_at = created_at;
    }
  }