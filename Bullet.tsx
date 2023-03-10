import { Box } from '@mui/material';
import { BoxProps } from '@mui/material';

const Bullet = (props: BoxProps & { size?: string }) => {
  const { sx = {}, size = '11px', ...rest } = props;
  return (
    <Box
      sx={{
        ...{
          width: size,
          height: size,
          bgcolor: 'success.main',
          borderRadius: '50%'
          // border: '1px solid #DDDBE3',
          // boxShadow: '0px 4px 4px 0px #00000040',
          // opacity: 0.8
        },
        ...sx
      }}
      {...rest}
    />
  );
};

export default Bullet;
