import { Separator } from '../ui/separator';

export default function Topbanner() {
  return (
    <div className="flex flex-col-reverse h-auto w-[90%] mx-[5%]">
      <div>
        <h1 className="mt-3">
          “<span className="font-extrabold">GovLead Entrepreneur Incubation Program</span> –{' '}
          <span className="font-light">Empowering Entrepreneurs, Creating Jobs</span>”
        </h1>
      </div>
      <Separator className="mt-3" />
      <div className="flex justify-center items-center bg-gray-200 h-[300px] w-[100%] mt-4">
        <div>Image placeholder</div>
      </div>
    </div>
  );
}
