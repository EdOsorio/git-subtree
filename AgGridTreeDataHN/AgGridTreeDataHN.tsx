import { Box, styled, Typography } from '@mui/material';
import {
  AgGridHNResponsive,
  AgGridReactHNProps,
  cx,
  folderContracted,
  folderExpanded
} from '@purplelab/healthnexus-library-ui';
import { useState } from 'react';
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
}

const AgGridTreeDataHN = <Data extends any>(
  props: AgGridReactHNProps & AgGridTreeDataHN
) => {
  const {
    treeData = true,
    animateRows = true,
    suppressLoadingOverlay = true,
    suppressNoRowsOverlay = true,
    noRowsOverlayMessage = 'No data Found',
    icons = gridIcons,
    headerHeight = 0,
    className,
    rowModelType,
    rowData,
    isLoadingData = false,
    onFilterChanged,
    onFirstDataRendered,
    ...rest
  } = props;

  const [isNotDataRetrievedState, setIsNotDataRetrievedState] =
    useState<boolean>(false);

  return (
    <>
      <TreeTabContainer>
        {isLoadingData && <AgGridLoaderEmbeded />}
        {isNotDataRetrievedState && (
          <NoRowsOverlay>
            <Typography variant="h4" color="secondary" fontWeight={500}>
              {noRowsOverlayMessage}
            </Typography>
          </NoRowsOverlay>
        )}

        <AgGridHNResponsive<Data>
          treeData={treeData}
          animateRows={animateRows}
          icons={icons}
          headerHeight={headerHeight}
          suppressLoadingOverlay={suppressLoadingOverlay}
          rowModelType={rowModelType}
          rowData={rowData}
          className={cx(
            className,
            styles['ag-tree-data'],
            headerHeight === 0 && styles['ag-tree-data-no-header']
          )}
          suppressNoRowsOverlay={true}
          onFilterChanged={(params) => {
            const displayedRows = params.api.getDisplayedRowCount();
            setIsNotDataRetrievedState(displayedRows === 0 ? true : false);
            if (onFilterChanged) onFilterChanged(params);
          }}
          onFirstDataRendered={(params) => {
            const displayedRows = params.api.getDisplayedRowCount();
            setIsNotDataRetrievedState(displayedRows === 0 ? true : false);
            if (onFirstDataRendered) onFirstDataRendered(params);
          }}
          {...rest}
        />
      </TreeTabContainer>
    </>
  );
};

export default AgGridTreeDataHN;
