import { League_Spartan } from 'next/font/google';

import Header from '@/components/header/header.component';
import Main from '@/components/main/main.component';

const leagueSpartan = League_Spartan({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={`${leagueSpartan.className} min-h-screen bg-lighter-grey`}>
      <Header />
      <Main />
    </div>
  );
}
