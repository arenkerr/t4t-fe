import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button.component';

const meta: Meta<typeof Button> = {
  title: 'Stories/Components/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Contained: Story = {
  args: {
    label: 'Button',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    label: 'Button',
  },
};
