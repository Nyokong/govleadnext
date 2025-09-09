import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { FaAsterisk } from 'react-icons/fa';
import { HiAcademicCap } from 'react-icons/hi';

import Image from 'next/image';
import Link from 'next/link';

export default function Topbanner() {
  return (
    <div>
      <div className="h-[120px] w-full"></div>
      <div className="md:hidden">
        <div className="flex flex-col-reverse h-auto w-[95%] mx-[2.5%] relative">
          {/* <Separator className="mt-3" /> */}

          {/* Background image */}
          <div className="flex justify-center items-center bg-gray-200 h-[500px] w-[100%] mt-4 rounded-2xl overflow-hidden">
            {/* <div>Image placeholder</div> */}
            <Image
              className="w-full h-full object-cover "
              src="/Hero_1.jpg"
              alt="Hero Image optimized"
              width={2975}
              height={1960}
            />
          </div>

          <div className="absolute top-[10px] right-3 flex justify-center items-center h-[50px] w-[50px] bg-orange-400 rounded-full">
            <HiAcademicCap size={40} fill="white" />
          </div>

          {/** Absolute Text on top of Image */}

          <div className="absolute h-auto w-[100%] bg-gradient-to-t from-[rgba(0,0,0,0.85)] to-transparent rounded-2xl">
            <h1 className="mt-3 px-4 text-white flex flex-col">
              <span className="font-extrabold text-2xl">
                IncuVera Entrepreneur Incubation Program
              </span>{' '}
              <span className="font-light">
                Empowering Entrepreneurs, Creating Jobs”
              </span>
            </h1>

            {/* <Separator /> */}

            <div className="flex flex-col h-auto px-4 w-full bg-gradient-to-t from-[rgba(0,0,0,0.55)] to-transparent rounded-2xl">
              <span className="h-[40px] w-full flex justify-center items-center my-2 font-bold text-3xl text-green-500">
                Join us Today!
              </span>
              <span className="w-full flex justify-center items-center ">
                <Link href="/joinnow">
                  <Button className="h-[60px] w-[250px] bg-orange-400 text-black rounded-none ">
                    Join Now
                  </Button>
                </Link>
              </span>
              <div className="flex flex-row h-auto p-4 w-full justify-center gap-2 mt-4">
                <span className="h-[10px] w-[10px] rounded-full bg-green-400"></span>
                <span className="h-[10px] w-[10px] rounded-full bg-white"></span>
                <span className="h-[10px] w-[10px] rounded-full bg-white"></span>
                <span className="h-[10px] w-[10px] rounded-full bg-white"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block">Top Section Large Screens</div>
    </div>
  );
}
