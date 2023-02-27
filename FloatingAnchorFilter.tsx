import {
  Badge,
  BadgeOrigin,
  BadgeProps,
  Button,
  ButtonProps,
  styled
} from '@mui/material';
import FilterSearchIcon from './Icons/FilterSearchIcon';

const BadgeStyled = styled(Badge)({
  position: 'absolute',
  top: '70px',
  left: 0,
  transform: 'translateX(-100%)'
});

const ButtonStyled = styled(Button)(({ theme }) => ({
  bgcolor: theme.palette.primary.main,
  borderRadius: 0,
  borderTopLeftRadius: '5px',
  borderBottomLeftRadius: '5px',

  padding: '8px',
  minWidth: 0,
  '&:hover': {
    bgcolor: theme.palette.primary.main,
    color: 'white'
  }
}));

const INIT_ANCHOR_ORIGIN = {
  vertical: 'top',
  horizontal: 'left'
} as BadgeOrigin;

interface IFloatingAnchorFilter {
  ButtonProps?: ButtonProps;
}

const FloatingAnchorFilter = (props: BadgeProps & IFloatingAnchorFilter) => {
  const {
    color = 'error',
    anchorOrigin = INIT_ANCHOR_ORIGIN,
    ButtonProps = {},
    ...badgeProps
  } = props;
  return (
    <BadgeStyled
      badgeContent={4}
      color={color}
      anchorOrigin={anchorOrigin}
      {...badgeProps}
    >
      <ButtonStyled {...ButtonProps}>
        <FilterSearchIcon />
      </ButtonStyled>
    </BadgeStyled>
  );
};

export default FloatingAnchorFilter;
