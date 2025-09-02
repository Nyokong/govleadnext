import { Header } from '@/components/header/header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import * as motion from 'motion/react-client';

export default function Page() {
  return (
    <div>
      <Header />
      <div className="h-[120px] w-full"></div>
      <div>
        <div className="w-full h-auto">
          <h1 className="h-[100px] w-full flex justify-center items-center text-3xl font-light bg-black text-white">
            Join now page
          </h1>
        </div>

        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.8,
            scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
          }}
          className="w-full h-auto"
        >
          <form action="" className="px-5 flex flex-col items-center">
            <Label className="italic opacity-65 mb-2 mt-4">We cant wait to hear from you!</Label>
            <div>
              <Input className="input-varient" placeholder="Enter your name..." />
              <Input className="input-varient" placeholder="Enter your surname..." />
            </div>

            <div>
              <Input className="input-varient" placeholder="Enter your email..." />
              <Input className="input-varient" placeholder="Enter contact email.." />
            </div>
            <Button className="h-[60px] w-[250px]">Submit</Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
