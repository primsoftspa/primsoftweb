import React from 'react';
import { Button } from 'react-bootstrap';

type Props = {
  onClick?: (evento: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
  variant: string;
}

export default ({ onClick, label, variant }: Props) => {
  return (
    <Button variant={variant} onClick={onClick} className='rounded-pill py-3 px-5 my-3'>
      {label}
    </Button>
  );
};
