import App from './App';
import { shallow} from 'enzyme';
import {findByTestAttr,testStore} from '../Utils';
import React from 'react';

const setUp = (initialState ={}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<App store={store}/>).childAt(0).dive();
    console.log(wrapper.debug())
    return wrapper;
}

describe('App Component',()=>{
    let wrapper;
    beforeEach(()=>{
        const initialState = {
            posts:[{
                title:'Example 1',
                body:'Some Text'
            },{
                title:'Example 2',
                body:'Some Text'
            },{
                title:'Example 3',
                body:'Some Text'
            }]
        }
        wrapper = setUp(initialState);
    })
    it('should render without errors',()=> {
        const component = findByTestAttr(wrapper,'appComponent');
        expect(component.length).toBe(1);
    })
})

