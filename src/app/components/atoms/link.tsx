import { FontStyle, Fonts, LinkVariant } from '@/app/types/index';
import { clsx } from 'clsx/lite';
import Link from 'next/link';
import { AnchorHTMLAttributes, ReactNode } from 'react';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  font?: Fonts;
  children: ReactNode;
  fontStyle?: FontStyle;
  className?: string;
  url: string;
  variant: LinkVariant;
}

export default function Text({
  fontStyle,
  font,
  className,
  children,
  ...rest
}: LinkProps) {
  const fontClass = font && `font-${font}`;
  const fontStyleClass = fontStyle && `font-${fontStyle}`;

  const linkClasses = clsx(fontClass, fontStyleClass, className);

  return (
    <Link href='#' className={linkClasses} {...rest}>
      {children}
    </Link>
  );
}
