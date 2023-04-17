import Image from 'next/image';

import ArrowDown from 'public/assets/icon-arrow-down.svg';

import Button from '@/components/button/button.component';
import NothingHere from './components/invoices/components/nothing-here/nothing-here.component';
import Cards from './components/invoices/components/cards/cards.component';

export default function Main() {
  return (
    <main className="mx-auto w-[327px] py-8">
      <div className="mb-4 flex justify-between">
        <div>
          <h1 className="heading-medium">Invoices</h1>
          <p className="body-variant text-grey">
            <span>7</span> invoices
          </p>
        </div>
        <div className="flex gap-[18px]">
          <button
            type="button"
            className="heading-small inline-flex items-center gap-3"
          >
            <p>Filter</p>
            <Image src={ArrowDown} alt="Click to filter out your invoices" />
          </button>
          <Button type="primary-new">New</Button>
        </div>
      </div>
      {/* <NothingHere /> */}
      <Cards />
    </main>
  );
}
