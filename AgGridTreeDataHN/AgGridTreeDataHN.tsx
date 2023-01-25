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

  const isLoadingData =
    rowModelType === 'clientSide' && (!rowData || rowData.length == 0);

  return (
    <>
      {isLoadingData && <AgGridLoader />}
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
    </>
  );
};

export default AgGridTreeDataHN;
