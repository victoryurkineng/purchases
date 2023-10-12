import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Layout } from './layout';

const propTitle = 'Content';
const propChildren = 'Children';

describe('Layout', () => {
  // Test default rendering, required props and children
  it('should render successfully', () => {
    const { baseElement, getByText } = render(
      <Layout title={propTitle}>{propChildren}</Layout>
    );
    // redering is successful
    expect(baseElement).toBeTruthy();
    // prop title
    expect(getByText(propTitle)).toBeVisible();
    // prop children
    expect(getByText(propChildren)).toBeVisible();
  });
});
