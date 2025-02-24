import { SvgIcon } from '@mui/material';

const DownloadIcon = (props: React.ComponentProps<typeof SvgIcon>) => {
  return (
    <SvgIcon viewBox="0 0 18 18" {...props}>
      <g transform="scale(0.030 0.030)">
        <path d="M435.2,153.6H320v25.6h102.4v307.2H89.6V179.2H192v-25.6H76.8c-7.066,0-12.8,5.734-12.8,12.8v332.8    c0,7.066,5.734,12.8,12.8,12.8h358.4c7.066,0,12.8-5.734,12.8-12.8V166.4C448,159.334,442.266,153.6,435.2,153.6z"></path>
        <path d="M341.956,234.249c-4.941-5.052-13.056-5.146-18.099-0.205L268.8,287.898V12.8C268.8,5.734,263.066,0,256,0    c-7.066,0-12.8,5.734-12.791,12.8v275.089l-55.057-53.854c-5.043-4.941-13.158-4.847-18.099,0.205    c-4.941,5.06-4.855,13.158,0.205,18.099l76.8,75.128c5.043,4.949,13.158,4.855,18.099-0.188l76.595-74.931    C346.803,247.407,346.897,239.309,341.956,234.249z"></path>
      </g>
    </SvgIcon>
  );
};

export default DownloadIcon;
