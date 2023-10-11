import { Layout } from './layout';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Layout> = {
  component: Layout,
  title: 'Layout',
};

export default meta;

type Story = StoryObj<typeof Layout>;

export const Default: Story = {
  args: {},
};
