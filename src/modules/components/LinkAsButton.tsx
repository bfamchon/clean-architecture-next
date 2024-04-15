import { buttonVariants } from '@/modules/components/ui/buttonVariants';
import { cn } from '@/modules/shared/utils';
import Link from 'next/link';
import React from 'react';

interface LinkAsButtonProps {
  to: string;
  className?: string;
  children: React.ReactNode;
}

export const LinkAsButton: React.FC<LinkAsButtonProps> = ({ to, className, children }) => {
  return (
    <Link href={to} className={cn(buttonVariants({ variant: 'default', size: 'default' }), className)}>
      {children}
    </Link>
  );
};

export default LinkAsButton;
