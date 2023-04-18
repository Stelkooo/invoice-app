import { useState } from 'react';

import { TFormInputs, TFormValues, TItem } from '@/types/form.types';

import GoBack from '../go-back/go-back.component';
import BillFrom from './components/bill-from/bill-from.component';
import BillTo from './components/bill-to/bill-to.component';
import InvoiceForm from './components/invoice-form/invoice-form.component';
import ItemList from './components/item-list/item-list.component';

const FormInputs: TFormInputs = {
  streetAddress: {
    name: 'streetAddress',
    label: 'Street Address',
    type: 'text',
  },
  city: {
    name: 'city',
    label: 'City',
    type: 'text',
  },
  postCode: {
    name: 'postCode',
    label: 'Post Code',
    type: 'text',
  },
  country: {
    name: 'country',
    label: 'Country',
    type: 'text',
  },
  clientName: {
    name: 'clientName',
    label: "Client's Name",
    type: 'text',
  },
  clientEmail: {
    name: 'clientEmail',
    label: "Client's Email",
    type: 'email',
  },
  clientAddress: {
    name: 'clientAddress',
    label: 'Street Address',
    type: 'text',
  },
  clientCity: {
    name: 'clientCity',
    label: 'City',
    type: 'text',
  },
  clientPostCode: {
    name: 'clientPostCode',
    label: 'Post Code',
    type: 'text',
  },
  clientCountry: {
    name: 'clientCountry',
    label: 'Country',
    type: 'text',
  },
  invoiceDate: {
    label: 'Invoice Date',
    name: 'invoiceDate',
    type: 'date',
  },
  paymentTerms: {
    label: 'Payment Terms',
    name: 'paymentTerms',
  },
  projectDescription: {
    label: 'Project Description',
    name: 'projectDescription',
    type: 'text',
  },
};

const initFormValues: TFormValues = {
  streetAddress: '',
  city: '',
  postCode: '',
  country: '',
  clientName: '',
  clientEmail: '',
  clientAddress: '',
  clientCity: '',
  clientPostCode: '',
  clientCountry: '',
  invoiceDate: '',
  paymentTerms: 'net1day',
  projectDescription: '',
};

const initItemList: TItem[] = [
  {
    name: '',
    quantity: 0,
    price: 0,
  },
];

type Props = {
  type: 'edit' | 'create';
  invoiceValues?: TFormValues;
  invoiceItems?: TItem[];
};

export default function Form({ type, invoiceItems, invoiceValues }: Props) {
  const [values, setValues] = useState<TFormValues>(
    invoiceValues || initFormValues
  );
  const [itemList, setItemList] = useState<Array<TItem>>(
    invoiceItems || initItemList
  );

  const valuesOnChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div className="absolute inset-0 mx-auto w-full bg-white px-6 pt-8">
      <GoBack />
      <div className="py-6">
        {type === 'create' ? (
          <h2 className="heading-medium mb-6">New Invoice</h2>
        ) : (
          <h2 className="heading-medium mb-6">
            Edit <span className="text-grey">#</span>XM9141
          </h2>
        )}
        <form className="grid gap-10">
          <BillFrom
            values={values}
            setValues={valuesOnChangeHandler}
            inputs={FormInputs}
          />
          <BillTo
            values={values}
            setValues={valuesOnChangeHandler}
            inputs={FormInputs}
          />
          <InvoiceForm
            values={values}
            setValues={valuesOnChangeHandler}
            inputs={FormInputs}
          />
          <ItemList itemList={itemList} setItemList={setItemList} />
        </form>
      </div>
    </div>
  );
}

Form.defaultProps = {
  invoiceValues: null,
  invoiceItems: null,
};
