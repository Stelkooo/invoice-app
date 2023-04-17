type Props = {
  children: string;
  type: 'primary' | 'primary-new' | 'edit' | 'delete';
};

export default function Button({ children, type }: Props) {
  const styleConfig: Record<
    typeof type,
    { text: string; bg: string; xPadding: string }
  > = {
    primary: {
      text: 'text-white',
      bg: 'bg-primary',
      xPadding: 'px-8',
    },
    'primary-new': {
      text: 'text-white',
      bg: 'bg-primary',
      xPadding: 'pl-2 pr-4',
    },
    edit: {
      text: 'text-clay',
      bg: 'bg-lighter-grey',
      xPadding: 'px-6',
    },
    delete: {
      text: 'text-white',
      bg: 'bg-danger',
      xPadding: 'px-6',
    },
  };
  return (
    <button
      type="button"
      className={`heading-small-variant relative inline-flex items-center gap-2 rounded-full ${
        styleConfig[type].text
      } ${styleConfig[type].bg} ${
        type === 'primary-new'
          ? `py-2 ${styleConfig[type].xPadding} before:h-8 before:w-8 before:rounded-full before:bg-white before:bg-[url('/assets/icon-plus.svg')] before:bg-center before:bg-no-repeat`
          : `${styleConfig[type].xPadding} py-4`
      }`}
    >
      {children}
    </button>
  );
}
