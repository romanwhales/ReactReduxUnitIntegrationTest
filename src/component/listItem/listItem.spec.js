import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr,checkProps} from '../../../Utils';
import ListItem from './index';

describe('ListItem Component',()=>{
    describe('checking PropTypes',()=>{
        it('should not throw a warning ',() => {
            const expectedProps = {
                title: 'Example Title',
                desc: 'Some Text'
            };
            const propsError = checkProps(ListItem,expectedProps);
            expect(propsError).toBeUndefined();
        })
    })

    describe('Component Renders',() => {
        let wrapper;
        beforeEach(()=>{
            const props = {
                title: 'Example Title',
                desc: 'Some text'
            }
            wrapper = shallow(<ListItem {...props}/>)
        });

        it('should render without error',()=> {
            const component = findByTestAttr(wrapper,'listItemComponent');
            expect(component.length).toBe(1);
        })

        it('should render a title',()=> {
            const title = findByTestAttr(wrapper,'componentTitle');
            expect(title.length).toBe(1);
        })

        it('should render a description ',() => {
            const desc = findByTestAttr(wrapper,'componentDesc');
            expect(desc.length).toBe(1);
        })
    });

    describe('should not render',() => {
        let wrapper;
        beforeEach(()=>{
            const props = {
                desc:'Some Text',
            }
            wrapper = shallow(<ListItem {...props}/>)
        });
        it('Component is not rendered ',()=> {
            const component = findByTestAttr(wrapper,'listItemComponent');
            expect(component.length).toBe(0);
        })
    })
})