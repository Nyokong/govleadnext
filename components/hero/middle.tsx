import { Separator } from '../ui/separator';
import { FaAngleDoubleDown } from 'react-icons/fa';

import Image from 'next/image';

export default function Middle() {
  return (
    <div>
      <div className="md:hidden flex flex-col h-auto w-[95%] mx-[2.5%] mt-4 relative">
        {/* <div className="flex justify-center items-center bg-gray-200 h-[150px] w-[100%] mt-4">
        <div>Image placeholder</div>
      </div> */}

        <div className="absolute top-[15px] left-[0px] p-4 w-full flex flex-row gap-1 bg-gradient-to-b from-[#000000c2] to-transparent rounded-2xl">
          <div className="mr-1.5 h-[40px] w-[40px] flex justify-center items-center rounded-full bg-green-400">
            <FaAngleDoubleDown color="white" />
          </div>
          <h1 className="font-semibold text-1xl text-center flex items-center text-white">
            About program
          </h1>
        </div>

        <Separator />

        <div className="flex justify-center items-center overflow-hidden rounded-2xl bg-gray-200 h-[330px] w-[100%] mt-4">
          <Image
            className="w-full h-full object-cover "
            src="/Sec_1.png"
            alt="Hero Image optimized"
            width={612}
            height={371}
          />
        </div>

        <div className="absolute bottom-[0px] left-[10px] my-4 p-4 w-[330px] sm:w-[360px] bg-rgba(64.6% 0.222 41.116) text-white rounded-2xl ">
          <span className="font-light italic">
            "Empowering aspiring entrepreneurs across{' '}
            <span className="font-bold">South Africa </span>
            with training, mentorship, and funding to launch{' '}
            <span className="font-bold">sustainable businesses</span>".
          </span>
        </div>

        {/* <div className="absolute bottom-[10px] left-[20px] text-white">
          <span>Training, Mentorship, Seed Funding</span>
        </div> */}
      </div>
      <div className="hidden md:block">Middle Section Media On large Screen</div>
    </div>
  );
}
