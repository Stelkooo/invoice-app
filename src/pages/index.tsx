import Header from '@/components/header/header.component';
import { League_Spartan } from 'next/font/google';

const leagueSpartan = League_Spartan({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={leagueSpartan.className}>
      <Header />
    </div>
  );
}
