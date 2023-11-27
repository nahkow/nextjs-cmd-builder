'use client';

import { Flex } from '@radix-ui/themes';
import Image from 'next/image';
import { ReactElement, cloneElement, useEffect, useState } from 'react';
import CheckboxButton from './CheckboxButton';

type CheckboxButtonProps = React.ComponentProps<typeof CheckboxButton> & {
  id: number;
};

interface CheckboxButtonGroupProps {
  children: Array<ReactElement<CheckboxButtonProps>>;
  state: ReturnType<typeof useState>;
}

const RadioButtonGroup = ({
  children,
  state: [state, setState],
}: CheckboxButtonGroupProps) => {
  const setSelected = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    setState(e.currentTarget.getAttribute('id') ?? '');
  };

  return (
    <div className="flex gap-1 py-2">
      {children.map((child) => {
        return cloneElement(child, {
          onClick: setSelected,
          checked: state === child.props.id,
        });
      })}
    </div>
  );
};

export default RadioButtonGroup;
