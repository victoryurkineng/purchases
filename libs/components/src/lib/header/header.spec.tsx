import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from './header';

const propTitle = 'Content';

describe('Layout', () => {
  // Test default rendering, required props and children
  it('should render successfully', () => {
    const { baseElement, getByText } = render(<Header title={propTitle} />);
    // rendering is successful
    expect(baseElement).toBeTruthy();
    // prop children
    expect(getByText(propTitle)).toBeTruthy();
  });
});
