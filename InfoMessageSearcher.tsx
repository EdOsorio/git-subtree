import { Alert, AlertProps } from '@mui/material';

const InfoMessageSearcher = (props: AlertProps) => {
  const { severity = 'info', sx, ...rest } = props;

  return (
    <Alert
      sx={{
        padding: 0,
        paddingX: '8px',
        color: 'primary.main'
      }}
      severity={severity}
      {...rest}
    />
  );
};

export default InfoMessageSearcher;
