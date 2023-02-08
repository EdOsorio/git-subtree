import { Button, ButtonProps, styled } from '@mui/material';

const ButtonAggrid = styled(
  ({ disableRipple = true, ...rest }: ButtonProps) => (
    <Button disableRipple={disableRipple} {...rest} />
  )
)(({ theme }) => ({
  alignSelf: 'flex-end',
  boxShadow: 'none',
  fontFamily: 'Arial',
  padding: '2px 12px',
  minWidth: 0,
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
    opacity: 0.9,
    boxShadow: 'none'
  }
}));

export default ButtonAggrid;
