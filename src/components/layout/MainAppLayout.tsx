import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Props for the MainAppLayout component.
 */
interface MainAppLayoutProps {
  /**
   * The content to be rendered inside the layout.
   * This is typically a page component.
   */
  children: React.ReactNode;
  /**
   * Optional additional class names for the main layout container.
   */
  className?: string;
}

/**
 * MainAppLayout provides the top-level layout structure for the application.
 * It creates a full-screen, centered container for its children, suitable for pages
 * like login, sign-up, or other focused views.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <main
      className={cn(
        'flex min-h-screen flex-col items-center justify-center bg-background p-4',
        className
      )}
    >
      {children}
    </main>
  );
};

export default MainAppLayout;
