import { HTMLAttributes, ReactNode } from 'react';

type TextProps = HTMLAttributes<HTMLParagraphElement> & {
  children: ReactNode;
  className?: string;
};

export default function Text({ className, children, ...rest }: TextProps) {
  return (
    <p className={className} {...rest}>
      {children}
    </p>
  );
}
