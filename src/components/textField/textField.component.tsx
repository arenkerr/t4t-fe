import MuiTextField from '@mui/material/TextField';
import { HTMLInputTypeAttribute } from 'react';

interface TextFieldProps {
  id: string;
  label: string;
  name: string;
  helperText?: string;
  type?: HTMLInputTypeAttribute;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
}

/**
 * TextField
 */
export const TextField = (props: TextFieldProps) => (
  <MuiTextField variant="outlined" fullWidth {...props} />
);
