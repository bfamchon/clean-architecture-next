import { Button } from '@mui/material';
import Link from 'next/link';
import React from 'react';
interface LinkAsButtonProps {
  to: string;
  className?: string;
  children: React.ReactNode;
}

export const LinkAsButton: React.FC<LinkAsButtonProps> = ({ to, className, children }) => {
  return (
    <Link href={to} passHref>
      <Button variant="contained">{children}</Button>
    </Link>
  );
};

export default LinkAsButton;
