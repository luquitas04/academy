import clsx from 'classnames';
import styles from './Button.module.scss';
import { memo } from 'react';

interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: 'SUCCESS' | 'ERROR' | 'WARNING' | 'INFO' | 'NEUTRAL' | 'NEUTRAL-GRAY';
  disabled?: boolean;
  text: string;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  type?: 'GHOST' | 'OUTLINE' | 'FILL';
  color?: string;
  children?: React.ReactNode;
}

const Button = ({ onClick, variant = 'NEUTRAL', disabled, text, style, className, icon, type = 'FILL', color, children }: ButtonProps) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={clsx(
      styles.button,
      styles[variant], 
      styles[type],
      className
    )}
    style={{ color, ...style }}
  >
    {icon}
    {text}
    {children}
  </button>
);

export default memo(Button); 
