import { Tab, Tabs } from '@mui/material';

interface TabsHNProps {
  tabItems: Array<Object>;
}

const TabsHN = ({ tabItems }: TabsHNProps) => (
  <Tabs
  // classes={{ indicator: 'background-color: rgba(255, 255, 255, 0.555) ' }}
  >
    {tabItems.map((item) => (
      <Tab key={item.id} label={item.label}></Tab>
    ))}
  </Tabs>
);
export default TabsHN;
