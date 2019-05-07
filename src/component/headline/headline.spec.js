import React from 'react';
import { shallow} from 'enzyme';
import Headline from './index';


import {findByTestAttr,checkProps} from '../../../Utils';


const setUp = (props ={}) => {
    const component = shallow(<Headline {...props}/>);
    return component;
}

describe('Headline Component',()=>{
    describe('Checking Proptypes',() => {
        it('should not throw a warning ',()=> {
            const expectedProps = {
                header: 'Test Header',
                desc: 'Test Desc',
                tempArr: [{
                    fName: 'Test fName',
                    lName: "test Lname",
                    email: 'test@gmail.com',
                    age: 23,
                    onlineStatus: true
                }]
            };

            const propsErr = checkProps(Headline,expectedProps);
            expect(propsErr).toBeUndefined();
        })
    })
    describe('Have Props ',() => {
        let wrapper; 
        beforeEach(() => {
            const props = {
                header: 'Test Header',
                desc: 'Test Desc'
            }
            wrapper = setUp(props);
        })

        it('should render without errors',() => {
            const component = findByTestAttr(wrapper,'HeadlineComponent');
            expect(component.length).toBe(1);

        })

        it('should render an h1',() => {
            const h1 = findByTestAttr(wrapper,'header');
            expect(h1.length).toBe(1);


        })

        it('Should render a desc ',() => {
            const desc = findByTestAttr(wrapper,'desc');
            expect(desc.length).toBe(1);
        })

    })
    describe('have no props',() => {
        let wrapper;
        beforeEach(() => {
            wrapper = setUp();

        })

        it('should not render ',() => {
            const component = findByTestAttr(wrapper,'HeadlineComponent');
            expect(component.length).toBe(0);
        })
    })
})