import React from 'react';
import renderer from 'react-test-renderer';
import AppContainer from '../containers/AppContainer';

test('AppContainer renders properly', () => {
  const component = renderer.create(
    <AppContainer />
  )

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
