import { ReactNode } from 'react';
import MuiModal from '@mui/material/Modal';
import { Container, Paper, Typography } from '@mui/material';

interface ModalProps {
  /**
   * Modal Content
   */
  children: ReactNode;
  open: boolean;
  onClose: () => void;
  title: string;
}

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  p: 4,
};

/**
 * Modal
 */
export const Modal = ({ children, open, onClose, title }: ModalProps) => {
  return (
    <MuiModal open={open} onClose={onClose} aria-labelledby="modal-modal-title">
      <Paper sx={modalStyle}>
        <Container>
          <Typography id="modal-modal-title" variant="h4" gutterBottom={true}>
            {title}
          </Typography>
          {children}
        </Container>
      </Paper>
    </MuiModal>
  );
};
