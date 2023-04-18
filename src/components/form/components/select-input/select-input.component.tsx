import { TSelectInput } from '@/types/form.types';

type Props = {
  inputObj: TSelectInput;
  value: string;
  setValue: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function SelectInput({
  inputObj: { label, name },
  value,
  setValue,
}: Props) {
  return (
    <div>
      <label className="flex flex-col" htmlFor={name}>
        <p className="body-variant mb-2 text-clay">{label}</p>
        <select
          name={name}
          className="heading-small-variant rounded-md border border-light-grey bg-transparent px-5 py-4"
          value={value}
          onChange={(e) => setValue(e)}
        >
          <option value="net1day">Net 1 Day</option>
          <option value="net7days">Net 7 Days</option>
          <option value="net14days">Net 14 Days</option>
          <option value="net30days">Net 30 Days</option>
        </select>
      </label>
    </div>
  );
}
