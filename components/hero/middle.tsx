import { Separator } from '../ui/separator';
import { FaAngleDoubleDown } from 'react-icons/fa';

export default function Middle() {
  return (
    <div className="flex flex-col h-auto w-[90%] mx-[5%] mt-4">
      <div className="my-3 flex flex-row gap-1">
        <div className="mr-1.5 h-[40px] w-[40px] flex justify-center items-center rounded-full bg-green-400">
          <FaAngleDoubleDown color="white" />
        </div>
        <h1 className="font-semibold text-1xl text-center flex items-center">About program</h1>
      </div>

      <Separator />

      <div className="flex justify-center items-center bg-gray-200 h-[100px] w-[100%] mt-4">
        <div>Image placeholder</div>
      </div>

      <div className="my-4">
        <p className="font-light">
          Empowering aspiring entrepreneurs across South Africa with training, mentorship, and
          funding to launch sustainable businesses.
        </p>
      </div>
    </div>
  );
}
