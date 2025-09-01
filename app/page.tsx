import Image from 'next/image';

import { Header } from '@/components/header/header';

import Footer from '@/components/footer/footer';
import Topbanner from '@/components/hero/topbanner';
import Middle from '@/components/hero/middle';

export default function Home() {
  return (
    <div>
      <Header />

      <Topbanner />
      <Middle />
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-[12px] row-start-2 items-center sm:items-start"></main>
      </div>
      <Footer />
    </div>
  );
}
