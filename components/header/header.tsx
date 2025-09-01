/**Mobile first approach */

import Signin from './signin';

/** icons */
import { AiOutlineMenu } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaWhatsappSquare } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa6';

/** Sheet menu  */
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

/** components  */
import { Separator } from '@/components/ui/separator';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <div className="w-full h-[105px] flex flex-col items-center ">
      <div className="flex flex-row justify-center items-center text-[10px] h-[35px] bg-green-600 w-full text-white">
        <span className="mx-2">reach GovLead Management Here: </span>
        <Link href={'govern@govlead.co.za'} className="text-white">
          govern@govlead.co.za
        </Link>
      </div>
      <div className="flex flex-row-reverse w-full justify-between">
        <div className="bg-none h-[70px] w-[70px] flex items-center justify-center mx-[25px]">
          <Sheet>
            <SheetTrigger>
              <AiOutlineMenu size={25} />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>side menu</SheetTitle>
                {/* <SheetDescription>side menu</SheetDescription> */}
              </SheetHeader>
              <div className="grid flex-1 auto-rows-min gap-6 px-4">
                <div className="side-menu-class flex flex-row items-center justify-around">
                  <Input className="w-[230px] h-[40px]" placeholder="Search the site..." />
                  <Button className="flex justify-center items-center h-[40px] w-[40px] px-2">
                    <FaSearch />
                  </Button>
                </div>
                <Separator />

                <div className="side-menu-class grid gap-3">
                  <Label htmlFor="sheet-demo-username">Incubation</Label>
                </div>

                <Separator />

                <div className="side-menu-class grid gap-3">
                  <Label htmlFor="sheet-demo-username">Enterpreneurs</Label>
                </div>

                <Separator />

                <div className="side-menu-class grid gap-3">
                  <Label htmlFor="sheet-demo-username">Clients</Label>
                </div>

                <Separator />

                <div className="side-menu-class grid gap-3">
                  <Label htmlFor="sheet-demo-username">Moderators</Label>
                </div>

                <Separator />

                <div className="side-menu-class grid gap-3">
                  <Label htmlFor="sheet-demo-name">About Us</Label>
                  {/* <div>
                  <Signin />
                </div> */}
                  <div className="flex flex-row items-center justify-end">
                    <FaWhatsappSquare color="#25D366" />
                    <FaFacebookSquare color="#4267B2" />
                    <FaInstagramSquare color="#f56040" />
                    <FaTwitterSquare color="#1D9BF0" />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="bg-none w-full h-[70px] flex items-center justify-left mx-[25px]">
          <Image src="./Full_Logo.svg" alt="logo optimized" width={100} height={100} />
        </div>
      </div>
      {/* <div className="h-[35px] flex justify-center items-center">
        <p>Want to get on with it?</p>
        <Button className="bg-transparent text-black h-[30px] b-none">Apply now</Button>
      </div> */}
    </div>
  );
};
