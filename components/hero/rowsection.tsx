import { FaAsterisk } from 'react-icons/fa';
import { HiAcademicCap } from 'react-icons/hi';
import { DiEnvato } from 'react-icons/di';
import { DiGoogleAnalytics } from 'react-icons/di';

export default function Rowpage() {
  return (
    <div className="relative bg-[#e7e7e7] h-[280px] ">
      <div className="w-full font-semibold h-[70px] flex justify-center items-center">
        <h1 className="text-black text-[30px]">what to Expect?</h1>
      </div>
      <div className="md:hidden w-[100%]  h-[160px] flex items-center justify-center gap-4">
        <div className="relative h-[100px] w-[100px] flex flex-col justify-center items-center gap-2 ">
          <span className="bg-[#2e2e2e] h-[89px] w-[90px] rounded-2xl flex justify-center items-center">
            <HiAcademicCap size={40} fill="white" />
          </span>
          <span className="absolute bottom-[-10px] w-[100px] py-2 px-4 flex justify-center items-center text-[10px] text-white bg-blue-500 rounded-2xl">
            Training
          </span>
        </div>

        <div className="relative h-[100px] w-[100px] flex flex-col justify-center items-center gap-2 ">
          <span className="bg-[#2e2e2e] h-[89px] w-[90px] rounded-2xl flex justify-center items-center">
            <DiEnvato size={40} fill="white" />
          </span>
          <span className="absolute bottom-[-10px] w-[100px] py-2 px-4 flex justify-center items-center text-[10px] text-white bg-blue-400 rounded-2xl">
            Mentorship
          </span>
        </div>
        <div className="relative h-[100px] w-[100px] flex flex-col justify-center items-center gap-2 ">
          <span className="bg-[#2e2e2e] h-[89px] w-[90px] rounded-2xl flex justify-center items-center">
            <DiGoogleAnalytics size={40} fill="white" />
          </span>
          <span className="absolute bottom-[-10px] w-[100px] py-2 px-4  flex justify-center items-center text-[10px] text-white bg-blue-500 rounded-2xl">
            Seed Funding
          </span>
        </div>
      </div>
      {/* 
      <div className="absolute top-[-20px] left-3">
        <FaAsterisk size={40} fill="#000" />
      </div>
      <div className="absolute bottom-[-30px] right-1">
        <FaAsterisk size={70} fill="#000" />
      </div> */}
    </div>
  );
}
