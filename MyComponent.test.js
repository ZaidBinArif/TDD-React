import React from 'react';
import MyComponent from '../MyComponent';

describe('MyComponent', () => {
  it('renders a <div /> tag', () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper.type()).toBe('div');
  });

  it('accepts a `className` prop', () => {
    const wrapper = shallow(<MyComponent className="test-class" />);
    expect(wrapper.hasClass('test-class')).toBe(true);
  });

  // START_HIGHLIGHT
  it('triggers `onClick` when clicked', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<MyComponent onClick={onClick} />);
    wrapper.simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
  // END_HIGHLIGHT
});
