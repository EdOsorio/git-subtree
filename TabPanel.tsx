import { Box, BoxProps } from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number | string;
  value: number | string;
  shouldUnmountChildren?: boolean;
}

const TabPanel = (props: TabPanelProps & BoxProps) => {
  const {
    children,
    value,
    index,
    shouldUnmountChildren = true,
    ...other
  } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {shouldUnmountChildren ? value === index && children : children}
    </Box>
  );
};

export default TabPanel;
