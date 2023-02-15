import { Box, Button, ButtonProps } from '@mui/material';
import React, { useState } from 'react';

interface FileUploaderProps {
  onFileUploaded: (file: File) => void;
}

type DragAndDropProps = Pick<
  ButtonProps,
  'onDrop' | 'onDragOver' | 'onDragEnter' | 'onDragLeave'
> & {
  isDragActive: boolean;
} & ;

const withDragAndDropFile = <ComponentProps extends DragAndDropProps>(
  Component: React.ComponentType<ComponentProps>
) =>
  function Comp(
    props: Omit<
      ComponentProps extends DragAndDropProps ? ComponentProps : never,
      | 'onDrop'
      | 'onDragOver'
      | 'onDragEnter'
      | 'onDragLeave'
      | 'onChange'
      | 'isDragActive'
    > &
      FileUploaderProps
  ) {
    // Omit<
    //   ComponentProps,
    //   'onDrop' | 'onDragOver' | 'onDragEnter' | 'onDragLeave' | 'onChange'
    // >;

    // props: Omit<
    //   ComponentProps,
    //   'onDrop' | 'onDragOver' | 'onDragEnter' | 'onDragLeave'
    // > &
    //   FileUploaderProps
    // props: ComponentProps
    const { onFileUploaded, ...rest } = props;
    const [isDragActive, setIsDragActive] = useState(false);

    const handleDrag = (event: React.DragEvent<HTMLButtonElement>) => {
      event.preventDefault();
      event.stopPropagation();
      if (event.type === 'dragenter' || event.type === 'dragover') {
        setIsDragActive(true);
      } else if (event.type === 'dragleave') {
        setIsDragActive(false);
      }
    };

    const handleDrop = (event: React.DragEvent<HTMLButtonElement>) => {
      event.preventDefault();
      event.stopPropagation();
      setIsDragActive(false);

      if (event.dataTransfer.files && event.dataTransfer.files[0]) {
        onFileUploaded(event.dataTransfer.files[0]);
      }
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!event.target.files) {
        return;
      }
      const file = event.target.files[0];

      onFileUploaded(file);
    };

    return (
      <Component
        onChange={onChange}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        isDragActive={isDragActive}
        {...rest}
      />
    );
  };

const BoxResult = withDragAndDropFile(Button);

// ExtendButtonBase<ButtonTypeMap<{}, 'button'>>;

export default withDragAndDropFile;
