import { alpha, keyframes, styled } from '@mui/material';

const BarLoaderWrapper = styled('span')(({ theme }) => ({
  display: 'inherit',
  position: 'relative',
  width: '100px',
  height: '4px',
  overflow: 'hidden',
  backgroundColor: alpha(theme.palette.primary.main, 0.2),
  backgroundClip: 'padding-box'
}));

const animationBarLoaderLong = keyframes({
  '0%': {
    left: '-35%',
    right: '100%'
  },
  '60%': {
    left: '100%',
    right: '-90%'
  },
  '100%': {
    left: '100%',
    right: '-90%'
  }
});

const BarLoaderLong = styled('span')(({ theme }) => ({
  position: 'absolute',
  height: '4px',
  overflow: 'hidden',
  backgroundColor: theme.palette.primary.main,
  backgroundClip: 'padding-box',
  display: 'block',
  borderRadius: '2px',
  willChange: 'left, right',
  animation: `2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) 0s infinite normal
      none running ${animationBarLoaderLong}`
}));

const animationBarLoaderShort = keyframes({
  '0%': {
    left: '-200%',
    right: '100%'
  },
  '60%': {
    left: '107%',
    right: '-8%'
  },
  '100%': {
    left: '107%',
    right: '-8%'
  }
});

const BarLoaderShort = styled('span')(({ theme }) => ({
  position: 'absolute',
  height: '4px',
  overflow: 'hidden',
  backgroundColor: theme.palette.primary.main,
  backgroundClip: 'padding-box',
  display: 'block',
  borderRadius: '2px',
  willChange: 'left, right',
  animation: `2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite normal none
    running ${animationBarLoaderShort}`
}));

const BarLoader = (props: React.ComponentProps<typeof BarLoaderWrapper>) => {
  return (
    <BarLoaderWrapper {...props}>
      <BarLoaderLong />
      <BarLoaderShort />
    </BarLoaderWrapper>
  );
};

export default BarLoader;
