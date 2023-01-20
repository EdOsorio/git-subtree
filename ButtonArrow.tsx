import { IconButton, styled } from '@mui/material';

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

const ButtonArrow = (props: React.ComponentProps<typeof IconButton>) => {
  const { children, ...rest } = props;
  return (
    <IconButtonStyled size="large" {...rest}>
      {children}
    </IconButtonStyled>
  );
};

export default ButtonArrow;
