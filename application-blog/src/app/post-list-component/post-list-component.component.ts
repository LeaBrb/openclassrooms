import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit {

  lastUpdate = new Date();
  
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;

  constructor() { }

  ngOnInit() {
  }
  
  onLike(){
    return this.postLoveIts++;
  }

  onDislike(){
    return this.postLoveIts--;
  }

  getColor(){
    if(this.postLoveIts > 0){
      return 'green';
    }else if(this.postLoveIts < 0){
      return 'red';
    }
  }

  getBackground(){
    if(this.postLoveIts > 0){
      return 'rgba(50, 205, 50, 0.2)';
    }else if(this.postLoveIts < 0){
      return 'rgba(255, 0, 0, 0.2)';
    }
  }

}
