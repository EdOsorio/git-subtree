import { IconButton, styled } from '@mui/material';
import React from 'react';

const IconButtonStyled = styled(IconButton)(({ theme, disabled }) => ({
  cursor: 'pointer',
  border: 'none',
  padding: '3px',
  background: 'none',
  width: '41px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover svg': {
    color: theme.palette.primary.main
  },
  ...(disabled && {
    opacity: 0.5
  })
}));

const ButtonArrow = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof IconButton>
>(function Button(props, ref) {
  const { children, ...rest } = props;
  return (
    <IconButtonStyled ref={ref} size="large" {...rest}>
      {children}
    </IconButtonStyled>
  );
});

export default ButtonArrow;
