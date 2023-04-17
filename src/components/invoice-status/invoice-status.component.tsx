import React from 'react';

type Props = {
  status: 'paid' | 'pending' | 'draft';
};

export default function InvoiceStatus({ status }: Props) {
  const styleConfig = {
    paid: {
      text: 'text-[#33D69F]',
      bg: 'bg-[#33D69F]',
    },
    pending: {
      text: 'text-[#FF8F00]',
      bg: 'bg-[#FF8F00]',
    },
    draft: {
      text: 'text-[#373B53]',
      bg: 'bg-[#373B53]',
    },
  };
  return (
    <div
      className={`${styleConfig[status].bg} inline-flex w-[102px] items-center justify-center gap-2 rounded-md bg-opacity-5 p-3`}
    >
      <div className={`h-2 w-2 rounded-full ${styleConfig[status].bg}`} />
      <p
        className={`heading-small-variant capitalize ${styleConfig[status].text}`}
      >
        {status}
      </p>
    </div>
  );
}
