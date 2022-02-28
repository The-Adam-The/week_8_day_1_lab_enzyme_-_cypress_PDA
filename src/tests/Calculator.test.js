import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('should add two numbers (1 + 4 = 5)',  () => {
    container.find('#number1').simulate('click');
    container.find('#operator_add').simulate('click');
    container.find('#number4').simulate('click');
    container.find('#operator-equals').simulate('click');
    const output = container.find('#running-total');
    expect(output.text()).toEqual('5');
  })

  it('should subtract two numbers (7 - 4 = 3)', () => {
    container.find('#number7').simulate('click');
    container.find('#operator-subtract').simulate('click');
    container.find('#number4').simulate('click');
    container.find('#operator-equals').simulate('click');
    const output = container.find('#running-total');
    expect(output.text()).toEqual('3');
  })

  it('should multiply two numbers (3 * 5 = 15)', ()  => {
    container.find('#number3').simulate('click');
    container.find('#operator-multiply').simulate('click');
    container.find('#number5').simulate('click');
    container.find('#operator-equals').simulate('click');
    const output = container.find('#running-total');
    expect(output.text()).toEqual('15');
  })

  it('should divide two number (21 / 7 = 3)', () => {
      container.find('#number2').simulate('click');
      container.find('#number1').simulate('click');
      container.find('#operator-divide').simulate('click');
      container.find('#number7').simulate('click');
      container.find('#operator-equals').simulate('click');
      const output = container.find('#running-total');
      expect(output.text()).toEqual('3');
    })
  

  it('should display multiple inputted numbers (1243569)', () => {
    container.find('#number1').simulate('click');
    container.find('#number2').simulate('click');
    container.find('#number3').simulate('click');
    container.find('#number4').simulate('click');
    container.find('#number5').simulate('click');
    container.find('#number6').simulate('click');
    container.find('#number7').simulate('click');
    container.find('#number8').simulate('click');
    container.find('#number9').simulate('click');
    const output = container.find('#running-total');
    expect(output.text()).toEqual('123456789');
  })

  it('should chain multiple operations together', () => {
    container.find('#number1').simulate('click');
    container.find('#operator_add').simulate('click');
    container.find('#number4').simulate('click');
    container.find('#operator-subtract').simulate('click');
    container.find('#number4').simulate('click');
    container.find('#number3').simulate('click');
    container.find('#operator-multiply').simulate('click');
    container.find('#number5').simulate('click');
    container.find('#number2').simulate('click');
    container.find('#number1').simulate('click');
    container.find('#operator-divide').simulate('click');
    container.find('#number7').simulate('click');
    container.find('#number1').simulate('click');
    container.find('#operator_add').simulate('click');
    container.find('#number4').simulate('click');
    container.find('#operator-subtract').simulate('click');
    container.find('#number4').simulate('click');
    container.find('#number3').simulate('click');
    container.find('#operator-multiply').simulate('click');
    container.find('#number5').simulate('click');
    container.find('#number2').simulate('click');
    container.find('#number1').simulate('click');
    container.find('#operator-divide').simulate('click');
    container.find('#number7').simulate('click');
    container.find('#operator-equals').simulate('click');
    const output = container.find('#running-total');
    expect(output.text()).toEqual('-23656.754527162982');
  })

  })


