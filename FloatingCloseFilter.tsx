import { Button, ButtonProps, styled } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ButtonStyled = styled(Button)({
  position: 'absolute',
  right: 0,
  top: '10px',
  transform: 'translateX(100%)',
  padding: '5px',
  minWidth: 0,
  borderRadius: 0,
  borderTopRightRadius: '5px',
  borderBottomRightRadius: '5px'
});

const FloatingCloseFilter = (props: ButtonProps) => {
  return (
    <ButtonStyled {...props}>
      <CloseIcon fontSize="small" />
    </ButtonStyled>
  );
};

export default FloatingCloseFilter;
