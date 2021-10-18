import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

// 用來取代原本每個test都有的
// const {getByTestId} = render(<Counter />);
let getByTestId;
beforeEach(()=>{
  const component = render(<Counter />);
  getByTestId = component.getByTestId;
})


test('expect text of counter is 計數器', () => {
  const headerEl = getByTestId('header');
  // 測試這個DOM裡的文字
  expect(headerEl.textContent).toBe('計數器');
})

test('expect initial value of count number is 0', () => {
  const counterEl = getByTestId('counter');
  expect(counterEl.textContent).toBe('0');
})

test('expect a text of + in the add button', () => {
  const addButtonEl = getByTestId('add-btn');
  expect(addButtonEl.textContent).toBe('+');
})


test('expect initial value of input value is 1', () => {
  const inputEl = getByTestId('input');
  expect(inputEl.value).toBe('1');
})

test('expect a text of - in the add button', () => {
  const substractButtonEl = getByTestId('substract-btn');
  expect(substractButtonEl.textContent).toBe('-');
})

test('change input value to 5, and expect the value of input is 5', () => {
  const inputEl = getByTestId('input');
  // 測試這個DOM裡的value，雖然我們放進去的是number，但是顯示的會是string
  expect(inputEl.value).toBe('1');
  // 觸發input的onCahnge的event，依照e.target.value的格式，放入第二個parameter
  fireEvent.change(inputEl, {
    target: {
      value: 5
    }
  })
  expect(inputEl.value).toBe('5');
})

test('after add button fired, expect the counter result is 2', () => {
  const addButtonEl = getByTestId('add-btn');
  const counterEl = getByTestId('counter');
  const inputEl = getByTestId('input');
  expect(counterEl.textContent).toBe('0');
  expect(inputEl.value).toBe('1')
  // 觸發onClick，不需要放第二個parameter
  fireEvent.click(addButtonEl);
  expect(counterEl.textContent).toBe('1');
})

test('change input value to 5, click add-btn, and expect the counter is 5',() => {
  const inputEl = getByTestId('input');
  const addButtonEl = getByTestId('add-btn');
  const counterEl = getByTestId('counter');
  fireEvent.change(inputEl,{
    target:{
      value:5
    }
  })
  expect(inputEl.value).toBe('5');
  fireEvent.click(addButtonEl);
  expect(counterEl.textContent).toBe('5')
})

test('change input value to 5, click subtract-btn, and expect the counter is -5',() => {
  const inputEl = getByTestId('input');
  const substractButtonEl = getByTestId('substract-btn');
  const counterEl = getByTestId('counter');
  fireEvent.change(inputEl,{
    target:{
      value:5
    }
  })
  expect(inputEl.value).toBe('5');
  fireEvent.click(substractButtonEl);
  expect(counterEl.textContent).toBe('-5')
})

test('change counter to greater than 100, or less than -100, then the color of counter will be green or red',() => {
  const counterEl = getByTestId('counter');
  const inputEl = getByTestId('input');
  const addButtonEl = getByTestId('add-btn');
  const substractButtonEl = getByTestId('substract-btn');
  fireEvent.change(inputEl,{
    target:{
      value:50
    }
  })
  fireEvent.click(addButtonEl);
  expect(counterEl.className).toBe('');
  fireEvent.click(addButtonEl);
  fireEvent.click(addButtonEl);
  // 取得class的值，大於等於100的時候必需是green
  expect(counterEl.className).toBe('green');
  fireEvent.click(substractButtonEl);
  fireEvent.click(substractButtonEl);
  fireEvent.click(substractButtonEl);
  fireEvent.click(substractButtonEl);
  // 在正負100之間，class必需是空的
  expect(counterEl.className).toBe('');
  fireEvent.click(substractButtonEl);
  fireEvent.click(substractButtonEl);
  // 小於負100的時候class必需是red
  expect(counterEl.className).toBe('red');
})