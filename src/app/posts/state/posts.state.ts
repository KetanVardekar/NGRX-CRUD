import { Post } from "src/app/models/post.model"

export interface PostsInterface{
    posts:Post[]
}

export const initialState:PostsInterface = {
    posts:[
        {
            id:'1'  ,title:"Sample Title-1",description:"Sample description-1"
        },
        {
            id:'2'  ,title:"Sample Title-2",description:"Sample description-2"
        }
    ]
}