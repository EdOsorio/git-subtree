import React from 'react';
import { ITooltipParams } from 'ag-grid-community';
import { Box, styled } from '@mui/material';

const TooltipWrapper = styled(Box)({
  width: '165px',
  height: '80px',
  border: '1px solid cornflowerblue',
  overflow: 'hidden',
  backgroundColor: 'white',
  position: 'relative'
});

const AgGridTooltip = (props: ITooltipParams) => {
  const { valueFormatted, colDef } = props;
  const { headerTooltip } = colDef ?? {};

  const isHeader = props.rowIndex === undefined;

  console.log('AgGridTooltip');
  return (
    <TooltipWrapper className="custom-tooltip">
      AgGridTooltip
      {isHeader ? headerTooltip : valueFormatted}
    </TooltipWrapper>
  );
};

export default AgGridTooltip;
