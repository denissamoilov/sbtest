import { render } from '@testing-library/react';

import Chevron from './chevron';

describe('Chevron', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Chevron />);
    expect(baseElement).toBeTruthy();
  });
});
