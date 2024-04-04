import { useState } from 'react';
import { Box, styled, Typography } from '@mui/material';
import {
  AgGridHN,
  AgGridHNResponsive,
  AgGridReactHNProps,
  cx,
  folderContracted,
  folderExpanded
} from '@purplelab/healthnexus-library-ui';
import { GridApi } from 'ag-grid-community';

import AgGridLoader from '../AgGridLoader';

import styles from './AgGridTreeDataHN.module.css';

export const gridIcons = {
  groupExpanded: folderExpanded,
  groupContracted: folderContracted
};

const TreeTabContainer = styled(Box)({
  flex: 1,
  position: 'relative'
});

const AgGridLoaderEmbeded = styled(AgGridLoader)({
  position: 'absolute',
  zIndex: 2,
  width: 'calc(100% - 2px)',
  top: '1px',
  left: '1px'
});

const NoRowsOverlay = styled(Box)({
  flex: 1,
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%'
});

interface AgGridTreeDataHN {
  noRowsOverlayMessage?: string;
  isLoadingData?: boolean;
  LoadingCellRenderer?: React.ReactNode;
}

const AgGridTreeDataHN = <Data extends any>(
  props: AgGridReactHNProps & AgGridTreeDataHN
) => {
  const {
    treeData = true,
    animateRows = true,
    suppressLoadingOverlay = true,
    suppressNoRowsOverlay = true,
    noRowsOverlayMessage = 'No Results Found',
    icons = gridIcons,
    headerHeight = 0,
    className,
    rowModelType,
    rowData,
    isLoadingData = false,
    onFilterChanged,
    onFirstDataRendered,
    onGridReady,
    onRowDataUpdated,
    LoadingCellRenderer = <AgGridLoaderEmbeded />,
    ...rest
  } = props;

  const [isNotDataRetrievedState, setIsNotDataRetrievedState] =
    useState<boolean>(false);

  const onUpdateNoDataRetrievedState = (api: GridApi) => {
    const displayedRows = api.getDisplayedRowCount();
    setIsNotDataRetrievedState(() => {
      if (isLoadingData) return false;
      return displayedRows === 0 ? true : false;
    });
  };

  return (
    <>
      <TreeTabContainer>
        {isLoadingData && LoadingCellRenderer}

        {isNotDataRetrievedState && (
          <NoRowsOverlay>
            <Typography
              variant="h4"
              color="secondary"
              fontWeight={400}
              sx={{
                fontFamily: 'var(--font-family-apple)',
                WebkitFontSmoothing: 'antialiased',
                fontSize: '12px'
              }}
            >
              {noRowsOverlayMessage}
            </Typography>
          </NoRowsOverlay>
        )}

        <AgGridHN<Data>
          boxShadow={false}
          treeData={treeData}
          animateRows={animateRows}
          icons={icons}
          headerHeight={headerHeight}
          suppressLoadingOverlay={suppressLoadingOverlay}
          rowModelType={rowModelType}
          rowData={rowData}
          columnDefs={[]}
          className={cx(
            className,
            styles['ag-tree-data'],
            headerHeight === 0 && styles['ag-tree-data-no-header']
          )}
          suppressNoRowsOverlay={true}
          onFilterChanged={(params) => {
            onUpdateNoDataRetrievedState(params.api);

            if (onFilterChanged) onFilterChanged(params);
          }}
          onRowDataUpdated={(params) => {
            onUpdateNoDataRetrievedState(params.api);

            if (onRowDataUpdated) onRowDataUpdated(params);
          }}
          onFirstDataRendered={(params) => {
            onUpdateNoDataRetrievedState(params.api);
            if (onFirstDataRendered) onFirstDataRendered(params);
          }}
          onGridReady={(params) => {
            onUpdateNoDataRetrievedState(params.api);

            if (onGridReady) onGridReady(params);
          }}
          {...rest}
        />
      </TreeTabContainer>
    </>
  );
};

export default AgGridTreeDataHN;
