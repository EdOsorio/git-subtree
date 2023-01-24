import { IconButton, IconButtonProps, styled } from '@mui/material';
import PlusIcon from './Icons/PlusIcon';

const IconButtonStyled = styled(IconButton)(({ theme }) => ({
  fontSize: '28px',
  padding: 0,
  '&:hover': {
    color: theme.palette.secondary.main
  }
}));

const AddButton = (props: IconButtonProps) => {
  return (
    <IconButtonStyled {...props}>
      <PlusIcon fontSize="inherit" />
    </IconButtonStyled>
  );
};

AddButton.defaultProps = {
  color: 'primary'
};

export default AddButton;
