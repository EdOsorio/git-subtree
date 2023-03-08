import { Card, CardProps, Typography } from '@mui/material';

import { styled } from '@mui/material/styles';

interface ChipsContainerProps {
  label: React.ReactNode;
  children?: React.ReactNode;
}

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

const ChipsContainer = (props: ChipsContainerProps & CardProps) => {
  const { label, children, ...cardProps } = props;
  return (
    <CardChips variant="outlined" {...cardProps}>
      {label}
      <ChipsList>{children}</ChipsList>
    </CardChips>
  );
};

export default ChipsContainer;
