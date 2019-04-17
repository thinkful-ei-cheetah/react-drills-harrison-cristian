import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Accordion from '../src/state-drills/Accordion'

it('renders as expected', () => {
    const tree = renderer
    .create(<Accordion className="accordion-item" key={null} />)
    .toJSON();
    expect(tree).toMatchSnapshot();
})