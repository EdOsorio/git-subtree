import { useRouter } from 'next/router';
import { MouseEventHandler, ReactNode, useCallback } from 'react';

interface LinkButtonProps {
  link: string;
  onClick?: () => void;
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
}

const LinkButton = (props: LinkButtonProps) => {
  const { children, className, link, disabled } = props;
  const router = useRouter();
  const clickHandler = useCallback(() => {
    router.push(link);
  }, [link, router]);
  return (
    <button className={className} onClick={disabled ? undefined : clickHandler}>
      {children}
    </button>
  );
};

export default LinkButton;
