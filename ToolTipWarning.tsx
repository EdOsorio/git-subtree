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

const ToolTipWarning = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip
    PopperProps={toolTipPlacement}
    {...props}
    classes={{ popper: className }}
  />
))(({ theme, placement }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'rgb(252, 248, 245)',
    color: 'rgb(91, 76, 62)',
    maxWidth: '500px',
    fontSize: '0.9rem',
    border: 'none',
    lineHeight: '1.4rem'
  }
}));

export default ToolTipWarning;
