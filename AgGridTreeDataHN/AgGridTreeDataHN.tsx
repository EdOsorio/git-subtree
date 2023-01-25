import { Box, styled } from '@mui/material';
import {
  AgGridHNResponsive,
  AgGridReactHNProps,
  cx,
  folderContracted,
  folderExpanded
} from '@purplelab/healthnexus-library-ui';
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

const AgGridTreeDataHN = <Data extends any>(props: AgGridReactHNProps) => {
  const {
    treeData = true,
    animateRows = true,
    icons = gridIcons,
    headerHeight,
    className = '',
    suppressLoadingOverlay = true,
    rowModelType,
    rowData,
    ...rest
  } = props;

  const isClientSide = !rowModelType || rowModelType === 'clientSide';
  const isNotDataAvailable = !rowData || rowData.length == 0;

  const isLoadingData = isClientSide && isNotDataAvailable;

  return (
    <>
      <TreeTabContainer>
        {isLoadingData && <AgGridLoaderEmbeded />}
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
          {...rest}
        />
      </TreeTabContainer>
    </>
  );
};

export default AgGridTreeDataHN;
