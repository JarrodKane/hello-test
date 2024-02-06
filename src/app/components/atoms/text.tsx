import { BrandColor, FontSize, FontStyle, Fonts } from '@/app/types/index';
import { clsx } from 'clsx/lite';
import { HTMLAttributes, ReactNode } from 'react';

type TextProps = HTMLAttributes<HTMLParagraphElement> & {
  textSize?: FontSize;
  textColor?: BrandColor;
  font?: Fonts;
  children: ReactNode;
  fontStyle?: FontStyle;
  className?: string;
};

export default function Text({
  fontStyle,
  textSize,
  textColor,
  font,
  className,
  children,
  ...rest
}: TextProps) {
  const fontClass = font && `font-${font}`;
  const fontStyleClass = fontStyle && `font-${fontStyle}`;

  const textClasses = clsx(
    textSize,
    textColor,
    fontClass,
    fontStyleClass,
    className
  );

  return (
    <p className={textClasses} {...rest}>
      {children}
    </p>
  );
}
