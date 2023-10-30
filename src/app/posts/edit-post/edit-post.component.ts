import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { getPostByID } from '../state/posts.selector';
import { Post } from 'src/app/models/post.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostsInterface } from '../state/posts.state';
import { updatePost } from '../state/posts.action';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
})
export class EditPostComponent implements OnInit {
  post!: any;
  postForm!: FormGroup;
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>,
    private router :Router
  ) {}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: any) => {
      console.log(params);
      const id = params.get('id');
      console.log(id);
      this.store.select(getPostByID, { id }).subscribe((res) => {
       this.post = res ;
       console.log(this.post)
      });
      this.postForm = new FormGroup({
        title: new FormControl(this.post.title, [
          Validators.required,
          Validators.minLength(6),
        ]),
        description: new FormControl(this.post.description, [
          Validators.required,
          Validators.minLength(10),
        ]),
      });
      
    });
  }
  onUpdatePost(){
    if(!this.postForm.valid){
      return
    }
    const title  =  this.postForm.value.title;
    const description = this.postForm.value.description;

    const post:Post={
      id: this.post.id,
      title,description
    }
    this.store.dispatch(updatePost({post}))
    this.router.navigate(['posts'])
  }
}
