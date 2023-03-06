import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Cross1Icon } from '@radix-ui/react-icons';
import styles from 'components/ui/Dialog/dialog.module.css';
import { IconButton } from 'components/ui/Button';

export const DialogContent = React.forwardRef<
  HTMLDivElement,
  DialogPrimitive.DialogContentProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay />
      <DialogPrimitive.Content {...props} ref={forwardedRef}>
        {children}
        <DialogPrimitive.Close asChild>
          <IconButton aria-label="close">
            <Cross1Icon />
          </IconButton>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
});

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;