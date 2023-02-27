import { SvgIcon } from '@mui/material';

const FilterSearchIcon = (props: React.ComponentProps<typeof SvgIcon>) => {
  const { sx, ...rest } = props;
  return (
    <SvgIcon
      viewBox="0 0 24 24"
      sx={{
        ...{
          fill: 'none'
        },
        ...sx
      }}
      {...rest}
    >
      <path
        d="M14.32 19.07c0 .61-.4 1.41-.91 1.72L12 21.7c-1.31.81-3.13-.1-3.13-1.72v-5.35c0-.71-.4-1.62-.81-2.12L4.22 8.47c-.51-.51-.91-1.41-.91-2.02V4.13c0-1.21.91-2.12 2.02-2.12h13.34c1.11 0 2.02.91 2.02 2.02v2.22c0 .81-.51 1.82-1.01 2.32"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M16.07 16.52a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4ZM19.87 17.12l-1-1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </SvgIcon>
  );
};

export default FilterSearchIcon;
