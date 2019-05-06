import React from 'react';
import { shallow} from 'enzyme';
import Header from './index';
import {findByTestAttr} from '../../../Utils'

const setUp = (props = {}) => {
    const component = shallow(<Header {...props}/>);
    return component;
}



describe('Header Component',()=>{

    let component;
    beforeEach(()=> {
        component = setUp();
    })
    it('should render without errors',()=>{
        // const component = setUp();
        console.log(component.debug());
        // const wrapper = component.find(`[data-test='headerComponent']`);
        const wrapper = findByTestAttr(component,'headerComponent');
        expect(wrapper.length).toBe(1);
    })
    it('should render a logo',()=> {
        // const component = setUp();
        // const logo = component.find(`[data-test='logoImg']`);
        const logo = findByTestAttr(component,'logoImg');
        expect(logo.length).toBe(1);
    })
})
