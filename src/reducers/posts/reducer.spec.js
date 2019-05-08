import {types} from '../../actions/types';
import PostReducer from './reducer';

describe('Posts Reducer',() => {
    // cos type dont match
    it('should return default state', ()=> {
        const newState = PostReducer(undefined,{});
        expect(newState).toEqual([])
    })

    it('should return new state if receiving type',()=> {
        const posts = [{title:'Test 1'},{title:'Test 2'},{title:'Test 3'}];
        const newState = PostReducer(undefined,{
            type:types.GET_POSTS,
            payload:posts
        })
        expect(newState).toEqual(posts);
    })
})