import Image from 'next/image';

import IllustrationEmpty from 'public/assets/illustration-empty.svg';

export default function NothingHere() {
  return (
    <div className="mt-[72px] flex flex-col items-center gap-10 text-center">
      <Image src={IllustrationEmpty} alt="Empty state" />
      <div>
        <h2 className="heading-medium mb-6">There is nothing here</h2>
        <p className="body-variant text-grey">
          Create an invoice by clicking the{' '}
          <span className="font-bold">New</span> button and get started
        </p>
      </div>
    </div>
  );
}
