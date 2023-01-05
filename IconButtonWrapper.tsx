import { IconButton, IconButtonProps } from '@mui/material';
import { styled } from '@mui/system';

type padding = { padding?: number | string };

export const IconButtonWrapper = styled(IconButton)<IconButtonProps & padding>(
  (props) => {
    const { padding = 4 } = props;
    return {
      padding: padding
    };
  }
);

const IconButtonDefaultProps: IconButtonProps = {
  className: 'has-aggrid-icon-styles'
};

IconButtonWrapper.defaultProps = IconButtonDefaultProps;
