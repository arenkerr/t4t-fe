import type { Meta, StoryObj } from '@storybook/react';

import { TextField } from './textField.component';

const meta: Meta<typeof TextField> = {
  title: 'Stories/Components/TextField',
  component: TextField,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Outlined: Story = {
  args: {
    label: 'TextField',
  },
};

export const Required: Story = {
  args: {
    label: 'Required TextField',
    required: true,
  },
};

export const Error: Story = {
  args: {
    label: 'TextField with Error',
    error: true,
    helperText: 'Oops!',
  },
};
