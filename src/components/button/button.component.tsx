import MuiButton from '@mui/material/Button';

interface ButtonProps {
  /**
   * Filled or outlined
   */
  variant?: 'contained' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  type?: 'submit' | 'reset' | 'button';
  label: string;
  fullWidth?: boolean;
  onClick?: () => void;
}

/**
 * Button
 */
export const Button = ({
  variant = 'contained',
  size = 'large',
  fullWidth = true,
  label,
  ...props
}: ButtonProps) => {
  return (
    <MuiButton variant={variant} size={size} fullWidth={fullWidth} {...props}>
      {label}
    </MuiButton>
  );
};
