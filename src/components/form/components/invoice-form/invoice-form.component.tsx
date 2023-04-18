import { TFormInputs, TFormValues } from '@/types/form.types';

import TextInput from '../text-input/text-input.component';
import SelectInput from '../select-input/select-input.component';

type Props = {
  inputs: TFormInputs;
  values: TFormValues;
  setValues: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
};

export default function InvoiceForm({ inputs, setValues, values }: Props) {
  return (
    <div>
      <p className="heading-small mb-6 text-primary">Bill To</p>
      <div className="grid gap-6">
        <TextInput
          inputObj={inputs.invoiceDate}
          value={values.invoiceDate}
          setValue={setValues}
        />
        <SelectInput
          inputObj={inputs.paymentTerms}
          value={values.paymentTerms}
          setValue={setValues}
        />
        <TextInput
          inputObj={inputs.projectDescription}
          value={values.projectDescription}
          setValue={setValues}
        />
      </div>
    </div>
  );
}
