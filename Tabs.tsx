import { styled, Tab, Tabs } from '@mui/material';
import style from './Tabs.module.css';

interface TabsHNProps {
  tabItems: Array<TabHNProps>;
  value: number | boolean;
  onChange: (event: React.SyntheticEvent, value: number) => void;
  variant?: 'fullWidth' | 'scrollable' | 'standard';
}

interface TabHNProps {
  key: number;
  label: string;
}

const StyledTabs = styled(Tabs)<any>(({ theme }) => ({
  minHeight: '0',
  height: '40px',
  '& .Mui-selected': {
    backgroundColor: 'var( --primary-color-theme)',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px'
  },
  '& .MuiButtonBase-root.MuiTab-root.Mui-selected': {
    color: '#fff'
  },
  '& .MuiTab-root:not(.Mui-selected):hover': {
    backgroundColor: '#eee',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px'
  },
  '& .MuiButtonBase-root.MuiTab-root': {
    fontWeight: '600',
    color: 'var( --text-color-secondary)'
  }
}));

const TabsHN = ({ tabItems, value, onChange }: TabsHNProps) => (
  <div className={style.tabsContainer}>
    <StyledTabs value={value} onChange={onChange} variant={'fullWidth'}>
      {tabItems.map((item) => (
        <Tab key={item.key} label={item.label}></Tab>
      ))}
    </StyledTabs>
  </div>
);
export default TabsHN;
