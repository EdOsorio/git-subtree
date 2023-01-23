import { SvgIcon } from '@mui/material';

const ConceptEditorIcon = (props: React.ComponentProps<typeof SvgIcon>) => {
  return (
    <SvgIcon
      width="41"
      height="41"
      fill="none"
      viewBox="0 0 41 41"
      {...props}
      sx={{
        fill: 'none'
      }}
    >
      <path
        d="M20.5 8.425H39.25M1.75 29.9875H20.5M39.25 26.125C39.25 33.3812 33.3812 39.25 26.125 39.25L28.0937 35.9688M1.75 14.875C1.75 7.61875 7.61875 1.75 14.875 1.75L12.9062 5.03125M24.6625 1.75H35.0875C38.425 1.75 39.25 2.575 39.25 5.875V13.5813C39.25 16.8813 38.425 17.7063 35.0875 17.7063H24.6625C21.325 17.7063 20.5 16.8813 20.5 13.5813V5.875C20.5 2.575 21.325 1.75 24.6625 1.75ZM5.9125 23.3125H16.3375C19.675 23.3125 20.5 24.1375 20.5 27.4375V35.1437C20.5 38.4437 19.675 39.2687 16.3375 39.2687H5.9125C2.575 39.2687 1.75 38.4437 1.75 35.1437V27.4375C1.75 24.1375 2.575 23.3125 5.9125 23.3125Z"
        stroke={'currentColor'}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
};

export default ConceptEditorIcon;
