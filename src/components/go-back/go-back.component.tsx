import Image from 'next/image';
import { useRouter } from 'next/router';

import LeftArrow from 'public/assets/icon-arrow-left.svg';

export default function GoBack() {
  const router = useRouter();

  const onClickHandler = () => {
    router.back(); // Go back to previous page
  };
  return (
    <button
      type="button"
      className="heading-small-variant inline-flex items-center gap-6"
      onClick={onClickHandler}
    >
      <Image src={LeftArrow} alt="Go Back" /> Go Back
    </button>
  );
}
