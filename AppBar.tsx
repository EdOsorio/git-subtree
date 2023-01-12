import { AppBar } from '@mui/material';

interface AppBarProps {
  children: React.ReactNode;
  position: 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky';
}

const AppBarHN = ({ children, position = 'static' }: AppBarProps) => (
  <AppBar position={position}>{children}</AppBar>
);
export default AppBarHN;
