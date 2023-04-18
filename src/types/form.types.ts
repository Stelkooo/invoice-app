export type TTextInput = {
  name: string;
  label: string;
  type: 'text' | 'email' | 'number' | 'date';
};

export type TSelectInput = {
  name: string;
  label: string;
};

export type TItem = {
  name: string;
  quantity: number;
  price: number;
};

export type TFormInputs = {
  streetAddress: TTextInput;
  city: TTextInput;
  postCode: TTextInput;
  country: TTextInput;
  clientName: TTextInput;
  clientEmail: TTextInput;
  clientAddress: TTextInput;
  clientCity: TTextInput;
  clientPostCode: TTextInput;
  clientCountry: TTextInput;
  invoiceDate: TTextInput;
  paymentTerms: TSelectInput;
  projectDescription: TTextInput;
};

export type TFormValues = {
  streetAddress: string;
  city: string;
  postCode: string;
  country: string;
  clientName: string;
  clientEmail: string;
  clientAddress: string;
  clientCity: string;
  clientPostCode: string;
  clientCountry: string;
  invoiceDate: string;
  paymentTerms: string;
  projectDescription: string;
};
