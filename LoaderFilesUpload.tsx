import { styled, Typography } from '@mui/material';
import React from 'react';
import {
  GridLoaderSpinnerIcon,
  GridLoaderSpinnerIconProps,
  LoaderOverlay,
  OverlayProps
} from '@purplelab/healthnexus-library-ui';

interface LoaderFilesUploadProps {
  progress: number;
  children: React.ReactNode;
}

const ContentWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px'
});

const LoaderFilesUpload = (
  props: LoaderFilesUploadProps & OverlayProps & GridLoaderSpinnerIconProps
) => {
  const {
    progress = 0,
    size = 130,
    children,
    overlayOpacity = 0.7,
    className,
    ...gridLoaderProps
  } = props;

  return (
    <LoaderOverlay overlayOpacity={overlayOpacity} className={className}>
      <ContentWrapper>
        <GridLoaderSpinnerIcon size={size} {...gridLoaderProps} />

        <Typography component={'span'} fontSize="2rem" color="primary">
          {progress}%
        </Typography>
        <Typography
          fontSize="1rem"
          color="primary"
          maxWidth={300}
          textAlign="center"
        >
          {children}
        </Typography>
      </ContentWrapper>
    </LoaderOverlay>
  );
};

export default LoaderFilesUpload;
