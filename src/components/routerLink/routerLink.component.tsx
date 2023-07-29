import MuiLink from '@mui/material/Link';
import { Link } from 'react-router-dom';

interface RouterLinkProps {
  label: string;
  to: string;
  color?: string;
  variant?: 'body1' | 'body1' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  underline?: 'always' | 'hover' | 'none';
}

/**
 * RouterLink
 */
export const RouterLink = ({
  label,
  underline = 'always',
  ...props
}: RouterLinkProps) => {
  return (
    <MuiLink component={Link} underline={underline} {...props}>
      {label}
    </MuiLink>
  );
};
