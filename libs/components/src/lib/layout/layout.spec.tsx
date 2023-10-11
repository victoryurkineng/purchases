import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Layout } from './layout';

// Common default properties for each component
const propClassName = 'some-class';
const propId = 'some-id';
const propTestId = 'some-testid';
const propAriaLabel = 'some-aria-label';
const propChildren = 'Content';
const propT = 'some-i18n-key';

describe('Layout', () => {
  // Test default rendering, required props and children
  it('should render successfully', () => {
    const { baseElement, getByTestId } = render(
      <Layout>
        {propChildren}
      </Layout>
    );
    // redering is successful
    expect(baseElement).toBeTruthy();
    // prop size
    expect(getByTestId(propTestId)).toHaveClass('text-sm');
    // prop children
    expect(getByTestId(propTestId)).toHaveTextContent(propChildren);
  });

  // Test optional properties
  it('property > className', () => {
    const { getByTestId } = render(
      <Layout className={propClassName}>
        {propChildren}
      </Layout>
    );
    expect(getByTestId(propTestId)).toHaveClass(propClassName);
  });

  it('property > id', () => {
    const { getByTestId } = render(
      <Layout testId={propTestId} id={propId}>
        {propChildren}
      </Layout>
    );
    expect(getByTestId(propTestId)).toHaveAttribute('id', propId);
  });

  it('property > ariaLabel', () => {
    const { getByTestId } = render(
      <Layout testId={propTestId} ariaLabel={propAriaLabel}>
        {propChildren}
      </Layout>
    );
    expect(getByTestId(propTestId)).toHaveAttribute(
      'aria-label',
      propAriaLabel
    );
  });

  it('property > t', () => {
    const { getByTestId } = render(
      <Layout testId={propTestId} t={propT}>
        {propChildren}
      </Layout>
    );
    expect(getByTestId(propTestId)).toHaveAttribute('data-t', propT);
  });

  // Handlers and other methods
  it('should handle a click event', () => {
    const mock = vitest.fn();
    const { getByTestId } = render(
      <Layout testId={propTestId} onClick={mock}>
        {propChildren}
      </Layout>
    );
    fireEvent.click(getByTestId(propTestId));
    expect(mock).toHaveBeenCalled();
  });
});
