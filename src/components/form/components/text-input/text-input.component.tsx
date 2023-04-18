import { TTextInput } from '@/types/form.types';

type Props = {
  inputObj: TTextInput;
  value: string | number;
  setValue: (
    e: React.ChangeEvent<HTMLInputElement>,
    itemIndex?: number
  ) => void;
};

export default function TextInput({
  inputObj: { name, type, label },
  value,
  setValue,
}: Props) {
  return (
    <div>
      <label className="flex flex-col" htmlFor={name}>
        <p className="body-variant mb-2 text-clay">{label}</p>
        <input
          type={type}
          name={name}
          value={value}
          className="heading-small-variant rounded-md border border-light-grey px-5 py-4"
          style={{ MozAppearance: 'textfield' }}
          onChange={(e) => setValue(e)}
        />
      </label>
    </div>
  );
}
