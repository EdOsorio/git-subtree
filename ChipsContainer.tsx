import { Card, CardProps, Typography } from '@mui/material';

import { styled } from '@mui/material/styles';

const CardChips = styled(Card)({
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
});

const ChipsList = styled('span')({
  display: 'flex',
  gap: '10px',
  height: '100%',
  alignItems: 'center',
  overflowX: 'auto',
  maxWidth: '100%',
  flex: 1
});

export const ChipsLabel = styled(Typography)((props) => ({
  marginLeft: '5px',
  height: '32px',
  margin: 'auto',
  display: 'flex',
  alignItems: 'center',
  fontSize: '0.9rem',
  paddingLeft: '15px',
  paddingTop: '20px',
  paddingBottom: '20px',
  paddingRight: '0'
}));

interface ChipsContainerProps {
  label: React.ReactNode;
  children?: React.ReactNode;
  ChipsListProps?: React.ComponentProps<typeof ChipsList>;
}

const ChipsContainer = (props: ChipsContainerProps & CardProps) => {
  const { label, children, ChipsListProps = {}, ...cardProps } = props;
  return (
    <CardChips variant="outlined" {...cardProps}>
      {label}
      <ChipsList {...ChipsListProps}>{children}</ChipsList>
    </CardChips>
  );
};

export default ChipsContainer;
