'use client';

import { Tooltip } from '@radix-ui/themes';
import Image from 'next/image';
import { useState } from 'react';

const CopyCode = ({ text }: { text: string }) => {
  const [open, setOpen] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(text);
    setOpen((state) => {
      setTimeout(() => {
        setOpen(false);
      }, 500);
      return true;
    });
  };
  return (
    <Tooltip content="Copied!" open={open}>
      <button
        className="flex border-2 rounded bg-blue-50 border-blue-900 w-300"
        onClick={copy}
      >
        <div className="p-3 grow font-semibold text-left">{text}</div>
        <div className="p-3 self-center bg-sky-900/[.06]">
          <Image
            src="copy-solid.svg"
            width={16}
            height={16}
            alt="Picture of the author"
          />
        </div>
      </button>
    </Tooltip>
  );
};

export default CopyCode;
