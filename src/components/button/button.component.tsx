type Props = {
  children: string;
  type: 'primary' | 'primary-new' | 'edit' | 'delete' | 'secondary-full';
  onClick?: <T>(value?: T) => void;
};

export default function Button({ children, type, onClick }: Props) {
  const styleConfig: Record<
    typeof type,
    { text: string; bg: string; extra: string }
  > = {
    primary: {
      text: 'text-white',
      bg: 'bg-primary',
      extra: 'px-8',
    },
    'primary-new': {
      text: 'text-white',
      bg: 'bg-primary',
      extra: 'pl-2 pr-4',
    },
    edit: {
      text: 'text-clay',
      bg: 'bg-lighter-grey',
      extra: 'px-6',
    },
    delete: {
      text: 'text-white',
      bg: 'bg-danger',
      extra: 'px-6',
    },
    'secondary-full': {
      text: 'text-clay',
      bg: 'bg-lighter-grey',
      extra: 'text-center',
    },
  };
  return (
    <button
      type="button"
      className={`heading-small-variant relative inline-flex items-center justify-center gap-2 rounded-full ${
        styleConfig[type].text
      } ${styleConfig[type].bg} ${
        type === 'primary-new'
          ? `py-2 ${styleConfig[type].extra} before:h-8 before:w-8 before:rounded-full before:bg-white before:bg-[url('/assets/icon-plus.svg')] before:bg-center before:bg-no-repeat`
          : `${styleConfig[type].extra} py-4`
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  onClick: null,
};
