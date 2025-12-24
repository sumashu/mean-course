import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  panelOpenState = false;
  // posts = [
  //   {id: 1, title: 'First Post', content: 'This is the first post\'s content'},
  //   {id: 2, title: 'Second Post', content: 'This is the second post\'s content'},
  //   {id: 3, title: 'Third Post', content: 'This is the third post\'s content'},
  //   {id: 4, title: 'Fourth Post', content: 'This is the Fourth post\'s content'},
  //   {id: 5, title: 'Fifth Post', content: 'This is the Fifth post\'s content'}
  // ];  
  posts:Post[] = [];
  constructor(public postService:PostsService) { }

  ngOnInit(): void {
   this.posts = this.postService.getPosts();
   this.postService.addpostListener().subscribe((posts:Post[]) => {
    this.posts = posts;
   });
  }


}
