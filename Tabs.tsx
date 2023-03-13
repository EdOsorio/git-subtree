import { styled, Tab, Tabs, Tooltip } from '@mui/material';
import style from './Tabs.module.css';

interface TabsHNProps {
  tabItems: Array<TabHNProps>;
  value: number | boolean;
  onChange: (event: React.SyntheticEvent, value: number) => void;
  variant?: 'fullWidth' | 'scrollable' | 'standard';
}

interface TabHNProps {
  key: number;
  label: React.ReactNode;
  disabled?: boolean;
  toolTipMessage?: string;
}

const StyledTabs = styled(Tabs)(({ theme }) => ({
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
  },
  '& .MuiButtonBase-root.MuiTab-root.Mui-disabled': {
    color: 'rgba(0, 0, 0, 0.38)',
    pointerEvents: 'auto'
  },
  '& .MuiButtonBase-root.MuiTab-root.Mui-disabled:hover': {
    backgroundColor: 'white'
  }
}));

const TabsHN = ({ tabItems, value, onChange }: TabsHNProps) => {
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`
    };
  }
  return (
    <div className={style.tabsContainer}>
      <StyledTabs value={value} onChange={onChange} variant={'fullWidth'}>
        {tabItems.map((item) => (
          <Tab
            key={item.key}
            label={
              <Tooltip
                placement="top"
                title={item.disabled && item.toolTipMessage}
              >
                <span>{item.label}</span>
              </Tooltip>
            }
            disabled={item.disabled}
            {...a11yProps(item.key - 1)}
          ></Tab>
        ))}
      </StyledTabs>
    </div>
  );
};
export default TabsHN;
