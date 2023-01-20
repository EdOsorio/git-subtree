import { SvgIcon } from '@mui/material';

const GearIcon = (props: React.ComponentProps<typeof SvgIcon>) => {
  return (
    <SvgIcon viewBox="0 0 12 12" {...props}>
      <defs>
        <style>
          {
            '.cls-1{stroke:var(--text-color-secondary);stroke-miterlimit:10;stroke-width:.25px}'
          }
        </style>
      </defs>
      <path
        className="cls-1"
        d="M0 5.31a1.42 1.42 0 0 1 .08-.18.74.74 0 0 1 .61-.42l.8-.1a.16.16 0 0 0 .15-.11c.06-.17.13-.34.2-.51a.11.11 0 0 0 0-.15c-.17-.22-.34-.43-.5-.65a.74.74 0 0 1 .06-1c.24-.25.49-.5.74-.74a.74.74 0 0 1 1-.07c.22.16.44.33.65.51a.15.15 0 0 0 .17 0c.16-.07.33-.14.51-.2a.15.15 0 0 0 .1-.16c0-.3.07-.58.12-.87A.73.73 0 0 1 5.45 0h1.08a.76.76 0 0 1 .78.7c0 .27.07.53.1.8a.13.13 0 0 0 .09.13l.5.24a.14.14 0 0 0 .16 0l.64-.5a.75.75 0 0 1 1 .07c.25.25.5.49.75.75a.72.72 0 0 1 .07 1q-.25.34-.51.66a.14.14 0 0 0 0 .18l.21.5a.14.14 0 0 0 .12.11l.78.09a.76.76 0 0 1 .71.6v1.36a.76.76 0 0 1-.67.58l-.8.1a.14.14 0 0 0-.15.11 5 5 0 0 1-.2.49.14.14 0 0 0 0 .18c.17.22.34.43.5.65a.72.72 0 0 1-.06 1l-.75.76a.75.75 0 0 1-1 .06l-.65-.5a.12.12 0 0 0-.15 0c-.17.08-.35.14-.52.21a.12.12 0 0 0-.1.12c0 .21-.05.42-.08.63a1.19 1.19 0 0 1-.15.58.87.87 0 0 1-.49.3H5.32a.72.72 0 0 1-.58-.64c0-.27-.08-.55-.11-.83a.14.14 0 0 0-.11-.14L4 10.17a.17.17 0 0 0-.19 0c-.21.18-.43.35-.65.51a.74.74 0 0 1-1-.06l-.75-.76a.74.74 0 0 1-.07-1c.18-.21.33-.44.5-.64a.12.12 0 0 0 0-.17 4.34 4.34 0 0 1-.2-.5.14.14 0 0 0-.15-.11l-.81-.1a.69.69 0 0 1-.48-.27 2 2 0 0 1-.2-.38ZM10.38 2.7a1.27 1.27 0 0 0-.13-.19C10 2.26 9.78 2 9.54 1.8s-.25-.16-.43 0l-.79.62A.3.3 0 0 1 8 2.4c-.26-.12-.53-.23-.81-.34a.29.29 0 0 1-.23-.26l-.12-1a.29.29 0 0 0-.29-.27h-1a.26.26 0 0 0-.31.22.13.13 0 0 0 0 .06c0 .31-.08.64-.12 1a.32.32 0 0 1-.22.28q-.42.15-.81.33a.3.3 0 0 1-.36 0l-.77-.6c-.2-.16-.28-.15-.44 0l-.7.7c-.15.15-.15.25 0 .43l.6.77a.32.32 0 0 1 0 .37 7.83 7.83 0 0 0-.42.77.29.29 0 0 1-.3.23l-1 .12a.27.27 0 0 0-.27.26v1c0 .2.08.28.28.3l1 .13a.28.28 0 0 1 .3.23 7.83 7.83 0 0 0 .37.87.32.32 0 0 1 0 .37q-.31.39-.6.78a.27.27 0 0 0 0 .37h.05l.69.69c.18.18.27.18.47 0l.76-.6A.32.32 0 0 1 4 9.6a7.27 7.27 0 0 0 .81.34.32.32 0 0 1 .23.3c0 .33.08.66.13 1a.25.25 0 0 0 .25.27h1c.21 0 .3-.08.32-.28s.09-.66.13-1a.28.28 0 0 1 .3-.23c.27-.1.54-.21.8-.33a.32.32 0 0 1 .38 0c.25.21.52.41.78.6a.25.25 0 0 0 .36 0l.71-.71a.25.25 0 0 0 .08-.36l-.05-.06-.62-.79A.32.32 0 0 1 9.6 8c.12-.28.24-.55.34-.83a.3.3 0 0 1 .28-.17l1-.12a.27.27 0 0 0 .27-.27v-1c0-.21-.08-.3-.3-.32l-1-.12a.31.31 0 0 1-.27-.23c-.1-.27-.21-.54-.33-.8a.32.32 0 0 1 0-.37l.62-.79a1.27 1.27 0 0 0 .17-.28Z"
      />
      <path
        className="cls-1"
        d="M5.93 8.51A2.5 2.5 0 1 1 8.5 6.09a2.52 2.52 0 0 1-2.57 2.42ZM8 6a2 2 0 1 0-2 2 2 2 0 0 0 2-2Z"
      />
    </SvgIcon>
  );
};

export default GearIcon;
