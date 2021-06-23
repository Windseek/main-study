import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { CoverView } from '../../hostComponents';

describe('CoverView', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<CoverView />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
