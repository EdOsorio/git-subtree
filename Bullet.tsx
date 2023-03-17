import { Box, BoxProps } from '@mui/material';

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
        },
        ...sx
      }}
      {...rest}
    />
  );
};

export default Bullet;
