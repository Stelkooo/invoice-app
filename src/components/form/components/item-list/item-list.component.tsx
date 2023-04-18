import { ChangeEvent, Dispatch, SetStateAction } from 'react';

import { TItem } from '@/types/form.types';

import Button from '@/components/button/button.component';
import Item from '../item/item.component';

type Props = {
  itemList: TItem[];
  setItemList: Dispatch<SetStateAction<TItem[]>>;
};

export default function ItemList({ itemList, setItemList }: Props) {
  const addHandler = () => {
    setItemList([...itemList, { name: '', price: 0, quantity: 0 }]);
  };
  const onChangeHandler = (
    e: ChangeEvent<HTMLInputElement>,
    itemIndex: number
  ) => {
    setItemList(
      itemList.map((item, index) =>
        index === itemIndex
          ? { ...item, [e.target.name]: e.target.value }
          : item
      )
    );
  };
  const deleteHandler = (itemIndex: number) => {
    setItemList(itemList.filter((item, index) => index !== itemIndex));
  };
  return (
    <div>
      <p className="heading-medium mb-6 text-primary">Item List</p>
      <div className="grid gap-y-12">
        {itemList.map((item, index) => (
          <Item
            item={item}
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            deleteHandler={() => deleteHandler(index)}
            index={index}
            onChangeHandler={onChangeHandler}
          />
        ))}
        <Button type="secondary-full" onClick={() => addHandler()}>
          + Add New Item
        </Button>
      </div>
    </div>
  );
}
