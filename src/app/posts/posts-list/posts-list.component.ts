import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { getPosts } from '../state/posts.selector';
import { PostsInterface } from '../state/posts.state';
import { Post } from 'src/app/models/post.model';
import { Observable } from 'rxjs';
import { deletePost } from '../state/posts.action';
@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts!:Observable<Post[]>
constructor(private store:Store<AppState>){

}
  ngOnInit(): void {
  this.posts = this.store.select(getPosts)
  }

  deletePost(id:any){
   if(confirm("Are you sure you want to delete")){
    this.store.dispatch(deletePost({id}))
   }
  }

}
