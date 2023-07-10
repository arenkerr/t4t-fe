import type { Meta } from '@storybook/react';
import { useArgs } from '@storybook/client-api';

import { Modal } from './modal.component';
import { ModalProps } from '@mui/material';

const meta: Meta<typeof Modal> = {
  title: 'Stories/Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  args: {
    children: 'This modal can be closed with the close icon.',
    open: false,
    onClose: () => null,
  },
};

export default meta;

export const PrimaryModal = ({ children }: ModalProps) => {
  const [{ open }, updateArgs] = useArgs();

  const handleClose = () => updateArgs({ open: !open });
  const title = 'Primary Modal';

  return (
    <>
      <Modal open={open} onClose={handleClose} title={title}>
        {children}
      </Modal>
    </>
  );
};
