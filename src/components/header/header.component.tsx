import Image from 'next/image';

export default function Header() {
  return (
    <header className="flex h-[72px] items-center justify-between bg-darker-grey">
      <div className="relative grid h-full place-content-center overflow-hidden rounded-r-3xl bg-primary px-6 before:absolute before:bottom-0 before:left-0 before:h-1/2 before:w-full before:rounded-tl-3xl before:bg-primary-light">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="26"
          className="relative"
        >
          <path
            fill="#FFF"
            fillRule="evenodd"
            d="M20.513 0C24.965 2.309 28 6.91 28 12.21 28 19.826 21.732 26 14 26S0 19.826 0 12.21C0 6.91 3.035 2.309 7.487 0L14 12.9z"
          />
        </svg>
      </div>
      <div className="flex h-full items-center gap-6">
        <div>
          <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19.502 11.342a.703.703 0 00-.588.128 7.499 7.499 0 01-2.275 1.33 7.123 7.123 0 01-2.581.46A7.516 7.516 0 018.74 11.06a7.516 7.516 0 01-2.198-5.316c0-.87.153-1.713.41-2.48.28-.817.69-1.559 1.226-2.197a.652.652 0 00-.102-.92.703.703 0 00-.588-.128C5.316.607 3.425 1.91 2.07 3.649A10.082 10.082 0 000 9.783C0 12.57 1.125 15.1 2.965 16.94a10.04 10.04 0 007.156 2.965c2.352 0 4.524-.818 6.262-2.173a10.078 10.078 0 003.579-5.597.62.62 0 00-.46-.793z"
              fill="#7E88C3"
              fillRule="nonzero"
            />
          </svg>
        </div>
        <div className="grid h-full place-content-center border-l border-l-dark-grey px-6">
          <Image
            src="/assets/image-avatar.jpg"
            alt="avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      </div>
    </header>
  );
}
