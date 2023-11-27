'use client';
import { Button } from '@radix-ui/themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface CheckboxButtonProps {
  checked?: boolean;
  children: React.ReactNode;
}

const CheckboxButton = ({
  checked,
  children,
  ...props
}: CheckboxButtonProps & React.ComponentProps<typeof Button>) => {
  const [_checked, setChecked] = useState(checked);

  useEffect(() => {
    setChecked(checked);
  }, [checked]);

  const onClick = () => {
    setChecked(!checked);
  };

  return (
    <>
      <Button
        onClick={onClick}
        {...(props as React.ComponentProps<typeof Button>)}
        variant={checked ? 'solid' : 'surface'}
      >
        {children}
      </Button>
    </>
  );
};

export default CheckboxButton;
