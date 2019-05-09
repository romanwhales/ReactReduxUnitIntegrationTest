import React from 'react';
import {findByTestAttr,checkProps} from '../../../Utils';
import {shallow} from 'enzyme';


import SharedButton from './index';

describe('Shared Button Component',()=> {
    describe('checking PropTypes',()=> {
        it('should not throw a warning',()=> {
            const expectedProps = {
                buttonText: 'Example Button Text',
                emitEvent: () => {

                }
            };
            const propsError = checkProps(SharedButton,expectedProps);
            expect(propsError).toBeUndefined();
        })
    })
    describe('Renders',() => {
        let wrapper;
        let mockFunc;
        beforeEach(()=>{
            mockFunc = jest.fn();
            const props = {
                buttonText: 'Example Button Text',
                emitEvent: mockFunc
            }
            wrapper = shallow(<SharedButton {...props}/>);
        })
        it('should render a button',()=>{
            const button = findByTestAttr(wrapper,'buttonComponent');
            expect(button.length).toBe(1);
        })

        it('should emit callback on click event ',()=>{
            const button = findByTestAttr(wrapper,'buttonComponent');
            button.simulate('click');
            const callback = mockFunc.mock.calls.length;
            expect(callback).toBe(1);
        })
    })
})
