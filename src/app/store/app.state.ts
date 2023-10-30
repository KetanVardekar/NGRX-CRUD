import { counterReducer } from "../counter/counter/state/counter.reducer";
import { CounterState } from "../counter/counter/state/counter.state";
import { postsReducer } from "../posts/state/posts.reducer";
import { PostsInterface } from "../posts/state/posts.state";

export interface AppState {
    counter:CounterState;
    posts:PostsInterface
}

export const appReducer={
    counter:counterReducer,
    posts:postsReducer
}