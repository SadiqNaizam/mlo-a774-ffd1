import React from 'react';
import { cn } from '@/lib/utils';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string; // Used as the placeholder text
}

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ className, type, label, id, ...props }, ref) => {
    return (
      <input
        id={id}
        name={id}
        type={type}
        ref={ref}
        placeholder={label}
        className={cn(
          'w-full border-0 border-b border-input bg-transparent py-2 text-base text-card-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-0',
          className
        )}
        {...props}
      />
    );
  }
);

FormInput.displayName = 'FormInput';

export default FormInput;
