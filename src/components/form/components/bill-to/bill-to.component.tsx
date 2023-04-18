import { TFormInputs, TFormValues } from '@/types/form.types';

import TextInput from '../text-input/text-input.component';

type Props = {
  values: TFormValues;
  inputs: TFormInputs;
  setValues: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function BillTo({ values, inputs, setValues }: Props) {
  return (
    <div>
      <p className="heading-small mb-6 text-primary">Bill To</p>
      <div className="grid gap-6">
        <TextInput
          inputObj={inputs.clientName}
          value={values.clientName}
          setValue={setValues}
        />
        <TextInput
          inputObj={inputs.clientEmail}
          value={values.clientEmail}
          setValue={setValues}
        />
        <TextInput
          inputObj={inputs.clientAddress}
          value={values.clientAddress}
          setValue={setValues}
        />
        <div className="grid grid-cols-2 gap-6">
          <TextInput
            inputObj={inputs.clientCity}
            value={values.clientCity}
            setValue={setValues}
          />
          <TextInput
            inputObj={inputs.clientPostCode}
            value={values.clientPostCode}
            setValue={setValues}
          />
          <div className="col-span-2">
            <TextInput
              inputObj={inputs.clientCountry}
              value={values.clientCountry}
              setValue={setValues}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
