import { Box, CircularProgress } from '@mui/material';
import { styled } from '@mui/system';

import CheckIcon from '@mui/icons-material/Check';
import SyncIcon from '@mui/icons-material/Sync';

import ClearIcon from '@mui/icons-material/Clear';

const StatusIcon = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow:
    '0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)',
  borderRadius: '50%',

  color: 'white',
  width: '40px',
  height: '40px',
  padding: '10px',
  position: 'relative'
});

const LoadingProgress = styled(CircularProgress)({
  position: 'absolute',
  zIndex: 1
});

export const StatusOkIcon = styled((props) => (
  <StatusIcon {...props}>
    <CheckIcon />
  </StatusIcon>
))({
  background: 'var(--status-ready-color)'
});

export const StatusLoadingIcon = styled((props) => (
  <StatusIcon {...props}>
    <LoadingProgress size={50} />
    <SyncIcon />
  </StatusIcon>
))({
  background: 'var( --status-pending-color)'
});

export const StatusFailedIcon = styled((props) => (
  <StatusIcon {...props}>
    <ClearIcon />
  </StatusIcon>
))({
  background: 'var(--status-failed-color)'
});

export default StatusIcon;
