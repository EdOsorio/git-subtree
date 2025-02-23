import { SvgIcon } from '@mui/material';

const InfoIcon = (props: React.ComponentProps<typeof SvgIcon>) => {
  return (
    <SvgIcon viewBox="0 0 16 16" {...props}>
      <path d="M7.5,0h1l.12,0a10.69,10.69,0,0,1,1.5.26,7.89,7.89,0,0,1,5.76,6.33c.06.29.08.59.12.88v1l0,.12A7.82,7.82,0,0,1,14,13.24a7.81,7.81,0,0,1-4.66,2.64c-.29,0-.59.08-.88.12h-1l-.12,0a7.21,7.21,0,0,1-2.46-.59,7.91,7.91,0,0,1-4.8-6C.07,9.09,0,8.79,0,8.5v-1l0-.14c.06-.4.1-.81.19-1.21a8,8,0,0,1,6.42-6C6.92.07,7.21,0,7.5,0ZM8,1.25A6.75,6.75,0,1,0,14.75,8,6.75,6.75,0,0,0,8,1.25Z" />
      <path d="M7.38,9.33c0-.65,0-1.3,0-1.95a.62.62,0,1,1,1.24,0c0,1.3,0,2.61,0,3.92a.62.62,0,1,1-1.24,0C7.37,10.65,7.38,10,7.38,9.33Z" />
      <path d="M8,4.25a.83.83,0,0,1,.84.84.84.84,0,0,1-1.68,0A.83.83,0,0,1,8,4.25Z" />
    </SvgIcon>
  );
};

export default InfoIcon;
