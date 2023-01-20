import { SvgIcon } from '@mui/material';

const ClockIcon = (props: React.ComponentProps<typeof SvgIcon>) => {
  return (
    <SvgIcon viewBox="0 0 16 16" {...props}>
      <g clipPath="url(#clip0_116_12659)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.8 7.672V3.2C8.8 2.76 8.44 2.4 8 2.4C7.56 2.4 7.2 2.76 7.2 3.2V8C7.2 8.224 7.288 8.424 7.432 8.568L9.832 10.968C9.976 11.112 10.176 11.2 10.4 11.2C10.84 11.2 11.2 10.84 11.2 10.4C11.2 10.176 11.112 9.976 10.968 9.832L8.8 7.672ZM8 0C3.584 0 0 3.584 0 8C0 12.416 3.584 16 8 16C12.416 16 16 12.416 16 8C16 3.584 12.416 0 8 0ZM8 14.4C4.464 14.4 1.6 11.536 1.6 8C1.6 4.464 4.464 1.6 8 1.6C11.536 1.6 14.4 4.464 14.4 8C14.4 11.536 11.536 14.4 8 14.4Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_116_12659">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

export default ClockIcon;
