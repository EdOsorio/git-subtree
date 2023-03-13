import { styled, Tab, Tabs } from '@mui/material';

export const TreeTabs = styled(Tabs)({
  minHeight: '0px',
  '& .MuiTabs-indicator': {
    width: '100%',
    backgroundColor: 'hsla(0,0%,100%,.555)',
    height: '4px'
  }
});

export const TreeTab = styled(Tab)(({ theme }) => ({
  minHeight: '0px',
  padding: '8px',

  background: theme.palette.primary.main,
  fontSize: '1rem',
  color: 'hsla(0,0%,89.4%,0.611764705882353)',
  fontFamily: 'var(--font-family-mui)',

  '&.Mui-selected': {
    color: '#fff'
  }
}));
