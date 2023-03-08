import { Box } from '@mui/material';
import { BoxProps } from '@mui/material';

const Bullet = (props: BoxProps) => {
  const { sx = {}, ...rest } = props;
  return (
    <Box
      sx={{
        ...{
          width: '15px',
          height: '15px',
          bgcolor: 'success.main',
          borderRadius: '50%',
          border: '1px solid #DDDBE3',
          boxShadow: '0px 4px 4px 0px #00000040'
        },
        ...sx
      }}
      {...rest}
    />
  );
};

export default Bullet;
