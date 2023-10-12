import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Table, THead, TBody, Tr, Td } from './table';

const propClassName = 'some-class';
const propHead = 'Head';
const propBody = 'Body';

describe('Table', () => {
  it('should render successfully', () => {
    const { baseElement, getByText } = render(
      <Table className={propClassName}>
        <THead>
          <Tr>
            <Td>{propHead}</Td>
          </Tr>
        </THead>
        <TBody>
          <Tr>
            <Td>{propBody}</Td>
          </Tr>
        </TBody>
      </Table>
    );
    // redering is successful
    expect(baseElement).toBeTruthy();
    expect(getByText(propHead)).toBeVisible();
    expect(getByText(propBody)).toBeVisible();
  });
});
