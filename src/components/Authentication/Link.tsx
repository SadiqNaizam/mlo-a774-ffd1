import React from 'react';
import { cn } from '@/lib/utils';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ children, className, ...props }) => {
  return (
    <a
      {...props}
      className={cn(
        'text-sm font-medium text-accent underline underline-offset-4 transition-colors hover:text-accent/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1',
        className
      )}
    >
      {children}
    </a>
  );
};

export default Link;
