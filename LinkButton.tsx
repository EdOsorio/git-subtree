import { useRouter } from 'next/router';
import { MouseEventHandler, ReactNode, useCallback } from 'react';

interface LinkButtonProps {
  link: string;
  onClick?: () => void;
  onMouseEnter?: MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  className?: string;
}

const LinkButton = (props: LinkButtonProps) => {
  const { children, className, link, onClick, onMouseEnter, onMouseLeave } =
    props;
  const router = useRouter();
  const clickHandler = useCallback(() => {
    router.push(link);
  }, [link, router]);
  return (
    <button
      className={className}
      onClick={clickHandler}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </button>
  );
};

export default LinkButton;
