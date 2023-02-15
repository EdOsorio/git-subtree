import { Button, ButtonProps, styled } from '@mui/material';

import FileUploadIcon from '@mui/icons-material/FileUpload';
import React from 'react';
import useDragAndDropFile from '../../hooks/useDragAndDropFile';

const ButtonFileUploader = styled((props) => (
  <Button variant="outlined" component="label" {...props} />
))<ButtonProps>(() => ({
  justifySelf: 'stretch',
  alignSelf: 'strech',
  borderStyle: 'dashed',
  borderWidth: '3px',

  '&:hover': {
    borderStyle: 'dashed',
    borderWidth: '3px'
  }
}));

interface FileUploaderProps {
  onFileUploaded: (file: File) => void;
}

const FileUploader = (props: ButtonProps & FileUploaderProps) => {
  const {
    onFileUploaded,

    sx,
    children,
    ...buttonProps
  } = props;

  const { handleDrag, handleDrop, onChange, isDragActive } = useDragAndDropFile(
    {
      onFileUploaded
    }
  );

  return (
    <ButtonFileUploader
      startIcon={<FileUploadIcon />}
      onDrop={handleDrop}
      onDragOver={handleDrag}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      sx={{
        ...{
          background: isDragActive ? 'rgba(115, 86, 121, 0.2)' : 'white'
        },
        ...sx
      }}
      {...buttonProps}
    >
      {children}

      <input type="file" accept=".csv" hidden onChange={onChange} />
    </ButtonFileUploader>
  );
};

export default FileUploader;
