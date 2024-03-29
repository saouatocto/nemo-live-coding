import React from 'react';
import { Stack } from 'components/ui/Stack';
import clsx from 'clsx';
import { AriaTextFieldProps, useTextField } from '@react-aria/textfield';
import style from 'components/ui/TextField/textfield.module.css';
import { Box } from 'components/ui/Box';
import { useObjectRef } from '@react-aria/utils';

interface TextFieldProps extends AriaTextFieldProps {
  label: string;
  fullWidth?: boolean;
}
export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ fullWidth = false, ...props }, ref) => {
    const inputRef = useObjectRef(ref);
    const { label, errorMessage } = props;
    const { labelProps, inputProps, errorMessageProps } = useTextField(
      props,
      inputRef,
    );

    return (
      <Stack
        className={style.wrapper}
        direction={'column'}
        spacing={1}
        fullWidth={fullWidth}>
        <label className={clsx(style.label)} {...labelProps}>
          {label}
        </label>
        <input
          className={clsx(style.input, fullWidth && style.full_width)}
          {...inputProps}
          ref={inputRef}
        />
        {errorMessage && (
          <Box {...errorMessageProps} className={clsx(style.error_msg)}>
            {errorMessage}
          </Box>
        )}
      </Stack>
    );
  },
);
