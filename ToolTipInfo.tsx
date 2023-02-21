import { styled, Tooltip, TooltipProps, tooltipClasses } from '@mui/material';

const toolTipPlacement = {
  popperOptions: {
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: ({ placement }: { placement: string }) => {
            if (placement === 'left') return [-2, -10];
            return [];
          }
        }
      }
    ]
  }
} as Pick<TooltipProps, 'PopperProps'>['PopperProps'];

const ToolTipInfo = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip
    PopperProps={toolTipPlacement}
    {...props}
    classes={{ popper: className }}
  />
))(({ theme, placement }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.main,
    maxWidth: '500px',
    fontSize: '0.9rem',
    border: 'none'
  }
}));

export default ToolTipInfo;
