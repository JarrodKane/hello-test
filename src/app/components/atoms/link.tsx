import { LinkVariant } from '@/app/types/index';
import clsx from 'clsx';
import Link from 'next/link';
import { AnchorHTMLAttributes, ReactNode } from 'react';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  className?: string;
  url: string;
  variant: LinkVariant;
}

const defaultClass = 'text-brand-sm';
const roundedPxPyClass = 'rounded-brand-link px-4 py-2';

// TODO: Add hover states

const primaryClass = `text-white bg-brand-green-dark ${roundedPxPyClass}`;
const linkClass = 'hover:text-brand-green-medium'; // We could leave this class blank but it's here for clarity
const outlineClass = `border border-brand-green-dark ${roundedPxPyClass}`;

export default function Text({
  className,
  url,
  variant,
  children,
  ...rest
}: LinkProps) {
  const linkClasses = clsx(defaultClass, className, {
    [primaryClass]: variant === 'primary',
    [linkClass]: variant === 'link',
    [outlineClass]: variant === 'outline',
  });

  return (
    <Link href={url} className={linkClasses} {...rest}>
      {children}
    </Link>
  );
}
