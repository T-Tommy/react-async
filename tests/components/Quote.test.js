import React from 'react';
import { shallow } from 'enzyme';
import Quote from '../../src/components/Quote';

describe('Quote component', () => {
  it('renders the Quote', () => {
    const wrapper = shallow(<Quote character="Fry" quote="quote" image="imgurl" />);
    expect(wrapper).toMatchSnapshot();
  });
});
