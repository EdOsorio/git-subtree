import { Box, styled } from '@mui/material';
import { BoxProps } from '@mui/system';

const WrapperAgGridLoader = styled(Box)({
  background: 'var(--table-even-rows-color)',
  color: 'var(--table-content-text-color)',
  fontFamily: 'var(--table-font-family)',
  fontSize: 'var(--table-font-size-rows)',
  height: '28px'
});

const AgLoading = styled('span')({
  paddingLeft: '12px'
});

const AgLoadingIcon = styled('span')({
  paddingRight: '12px'
});

const AgGridLoader = (props: BoxProps) => {
  return (
    <Box className="ag-theme-balham" {...props}>
      <WrapperAgGridLoader>
        <AgLoading className="ag-loading">
          <AgLoadingIcon className="ag-loading-icon">
            <span
              className="ag-icon ag-icon-loading"
              unselectable="on"
              role="presentation"
            />
          </AgLoadingIcon>
          <span className="ag-loading-text">Loading</span>
        </AgLoading>
      </WrapperAgGridLoader>
    </Box>
  );
};

export default AgGridLoader;
