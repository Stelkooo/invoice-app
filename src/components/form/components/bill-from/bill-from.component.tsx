import { TFormInputs, TFormValues } from '@/types/form.types';

import TextInput from '../text-input/text-input.component';

type Props = {
  values: TFormValues;
  inputs: TFormInputs;
  setValues: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function BillFrom({ values, inputs, setValues }: Props) {
  return (
    <div>
      <p className="heading-small mb-6 text-primary">Bill From</p>
      <div className="grid gap-6">
        <TextInput
          inputObj={inputs.streetAddress}
          value={values.streetAddress}
          setValue={setValues}
        />
        <div className="grid grid-cols-2 gap-6">
          <TextInput
            inputObj={inputs.city}
            value={values.city}
            setValue={setValues}
          />
          <TextInput
            inputObj={inputs.postCode}
            value={values.postCode}
            setValue={setValues}
          />
          <div className="col-span-2">
            <TextInput
              inputObj={inputs.country}
              value={values.country}
              setValue={setValues}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
