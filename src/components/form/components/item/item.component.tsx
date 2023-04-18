import { TItem } from '@/types/form.types';

import TextInput from '../text-input/text-input.component';

type Props = {
  item: TItem;
  index: number;
  deleteHandler: (itemIndex: number) => void;
  onChangeHandler: (
    e: React.ChangeEvent<HTMLInputElement>,
    itemIndex: number
  ) => void;
};

export default function Item({
  item,
  deleteHandler,
  index,
  onChangeHandler,
}: Props) {
  return (
    <div className="grid grid-cols-9 gap-x-4 gap-y-6">
      <div className="col-span-9">
        <TextInput
          inputObj={{
            label: 'Item Name',
            name: 'name',
            type: 'text',
          }}
          value={item.name}
          setValue={(e) => onChangeHandler(e, index)}
        />
      </div>
      <div className="col-span-2">
        <TextInput
          inputObj={{
            label: 'Qty.',
            name: 'quantity',
            type: 'number',
          }}
          value={item.quantity}
          setValue={(e) => onChangeHandler(e, index)}
        />
      </div>
      <div className="col-span-3">
        <TextInput
          inputObj={{
            label: 'Price',
            name: 'price',
            type: 'number',
          }}
          value={item.price}
          setValue={(e) => onChangeHandler(e, index)}
        />
      </div>
      <div className="col-span-3">
        <label className="flex flex-col" htmlFor="total">
          <p className="body-variant mb-2 text-clay">Total</p>
          <input
            readOnly
            type="number"
            name="total"
            value={item.price * item.quantity}
            className="heading-small-variant form-input rounded-md border border-light-grey px-5 py-4"
            style={{ MozAppearance: 'textfield' }}
          />
        </label>
      </div>
      <button
        type="button"
        className="mt-6 grid place-content-center"
        onClick={() => deleteHandler(index)}
      >
        <svg width="13" height="16" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z"
            fill="#888EB0"
            fillRule="nonzero"
          />
        </svg>
      </button>
    </div>
  );
}
