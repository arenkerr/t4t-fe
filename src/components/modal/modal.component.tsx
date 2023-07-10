import { ReactNode } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import CloseIconRounded from '@mui/icons-material/CloseRounded';

interface ModalProps {
  /**
   * Modal Content
   */
  children: ReactNode;
  /**
   * Toggle open or close
   */
  open: boolean;
  onClose?: () => void;
  title: string;
}

/**
 * Modal
 */
export const Modal = ({ children, open, onClose, title }: ModalProps) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen={fullScreen}
      aria-labelledby="modal-modal-title"
    >
      <DialogTitle>
        {onClose ? (
          <IconButton
            size="large"
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
            }}
          >
            <CloseIconRounded sx={{ fontSize: 54 }} color="primary" />
          </IconButton>
        ) : null}
        <Typography
          id="modal-modal-title"
          variant="h4"
          gutterBottom={true}
          mt={4}
        >
          {title}
        </Typography>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};
