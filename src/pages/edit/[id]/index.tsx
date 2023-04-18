import { League_Spartan } from 'next/font/google';

import Header from '@/components/header/header.component';
import Form from '@/components/form/form.component';

const leagueSpartan = League_Spartan({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={`${leagueSpartan.className} min-h-screen bg-white`}>
      <Header />
      <Form type="edit" />
    </div>
  );
}
