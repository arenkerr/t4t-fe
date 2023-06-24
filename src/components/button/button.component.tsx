import React from 'react';
import MuiButton from '@mui/material/Button';

interface ButtonProps {
  /**
   * Filled or outlined
   */
  variant?: 'contained' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

/**
 * Button
 */
export const Button = ({
  variant = 'contained',
  size = 'large',
  label,
  ...props
}: ButtonProps) => {
  return (
    <MuiButton variant={variant} size={size} {...props}>
      {' '}
      {label}
    </MuiButton>
  );
};
