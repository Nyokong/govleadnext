import { Button } from '../ui/button';
import { Separator } from '../ui/separator';

export default function Topbanner() {
  return (
    <div className="flex flex-col-reverse h-auto w-[95%] mx-[2.5%] relative">
      {/* <Separator className="mt-3" /> */}
      {/* Background image */}
      <div className="flex justify-center items-center bg-gray-200 h-[500px] w-[100%] mt-4">
        <div>Image placeholder</div>
      </div>

      {/** Absolute Text on top of Image */}

      <div className="absolute h-auto w-[90%] mx-[5%] bg-gray-200">
        <h1 className="mt-3">
          “<span className="font-extrabold">GovLead Entrepreneur Incubation Program</span> –{' '}
          <span className="font-light">Empowering Entrepreneurs, Creating Jobs</span>”
        </h1>

        <div className="flex flex-col h-auto">
          <span className="h-[40px]">Join us Today!</span>
          <span>
            <Button>Join Now</Button>
          </span>
        </div>
      </div>
    </div>
  );
}
