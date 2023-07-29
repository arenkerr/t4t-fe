import type { Meta, StoryObj } from '@storybook/react';

import { RouterLink } from './routerLink.component';

const meta: Meta<typeof RouterLink> = {
  title: 'Stories/Components/RouterLink',
  component: RouterLink,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RouterLink>;

export const Primary: Story = {
  args: {
    to: '/',
    label: 'Primary',
  },
};
