import {
  Box,
  Card,
  CardProps,
  styled,
  Tooltip,
  TooltipProps,
  Typography,
  TypographyProps,
  useMediaQuery
} from '@mui/material';

export const DetailWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  padding: '16px',
  gap: '8px'
});

export const CardDetail = styled((props) => (
  <Card variant="outlined" {...props} />
))<CardProps>({
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  gap: '10px',
  '@media (min-width: 700px)': {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export const DataDetail = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '3px'
});

export const DataDetailLabel = (props: TypographyProps) => {
  return (
    <Typography color="primary" fontWeight={600} variant="h4" {...props} />
  );
};

export const DataDetailValue = (props: TypographyProps) => {
  const { children, ...rest } = props;
  const isChildren = Boolean(children);

  const desktopSize = useMediaQuery('(min-width:700px)');

  return (
    <Typography
      variant="h4"
      fontWeight={400}
      textAlign={isChildren || !desktopSize ? 'start' : 'center'}
      sx={{ color: 'rgba(0, 0, 0, 0.87)', fontSize: '14px' }}
      {...rest}
    >
      {isChildren ? children : '-'}
    </Typography>
  );
};

export const ActionsDetailWrapper = styled(Box)({
  display: 'flex',
  gap: '3px'
});

export const TooltipDetail = (props: TooltipProps) => {
  return (
    <Tooltip
      placement="bottom"
      PopperProps={{
        popperOptions: {
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: ({ placement }: { placement: string }) => {
                  if (placement === 'bottom') return [0, -10];
                  return [];
                }
              }
            }
          ]
        }
      }}
      {...props}
    />
  );
};
