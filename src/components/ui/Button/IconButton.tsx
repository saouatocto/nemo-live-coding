import React from 'react';
import styles from 'components/ui/Button/icon_button.module.css';
import clsx from 'clsx';

export const IconButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  return (
    <button
      type="button"
      ref={ref}
      {...props}
      className={clsx(styles.wrapper, props.className)}>
      {props.children}
    </button>
  );
});
