import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostsInterface } from "./posts.state";
import { Post } from "src/app/models/post.model";

const getPostsState = createFeatureSelector<PostsInterface>('posts');

export const getPosts = createSelector(getPostsState, state =>{
    return state.posts
})

export const getPostByID = createSelector(getPostsState,(state:any,props:any)=>{
   return  state.posts.find((post:any) => post.id == props.id)
})