import React from 'react';
import renderer from 'react-test-renderer';

import Message from './Message';

it('renders', () => {
    const tree = renderer
        .create(<Message username="cat" message="cat" date={new Date(1525931262185)} id="dog" />)
        .toJSON();

    expect(tree).toMatchSnapshot();
});