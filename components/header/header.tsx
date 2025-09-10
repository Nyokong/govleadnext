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

/** Navigation Menu */
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu';

/** components  */
import { Separator } from '@/components/ui/separator';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <div className="fixed z-10 w-full h-[120px] flex flex-col items-center bg-white">
      <div className="flex flex-row justify-center items-center text-[10px] h-[40px] bg-green-600 w-full text-white">
        <span className="mx-2">reach GovLead Management Here: </span>
        <Link href={'govern@govlead.co.za'} className="text-white">
          govern@govlead.co.za
        </Link>
      </div>

      {/** Entrepreneurs
       * Investors
       * Mentors
       * Resources
       * Services
       * About
       */}

      <div className="flex flex-row-reverse w-full justify-between">
        {/** Small menu Navigation */}
        <div className="bg-none h-[70px] w-[70px] flex items-center justify-center mx-[25px] md:hidden">
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
                  <Input
                    className="w-[200px] h-[40px] border-0 rounded-none"
                    placeholder="Search the site..."
                  />
                  <Button className="flex justify-center items-center h-[40px] w-[40px] rounded-none ">
                    <FaSearch />
                  </Button>
                </div>
                <Separator />

                <div className="side-menu-class grid gap-3">
                  <Label htmlFor="sheet-demo-username">Entrepreneurs</Label>
                </div>

                <Separator />

                <div className="side-menu-class grid gap-3">
                  <Label htmlFor="sheet-demo-username">Investors</Label>
                </div>

                <Separator />

                <div className="side-menu-class grid gap-3">
                  <Label htmlFor="sheet-demo-username">Mentors</Label>
                </div>

                <Separator />

                <div className="side-menu-class grid gap-3">
                  <Label htmlFor="sheet-demo-username">Services</Label>
                </div>

                <Separator />

                <div className="side-menu-class grid gap-3">
                  <Label htmlFor="sheet-demo-username">Resources</Label>
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

        {/** Large menu Navigation */}
        <div className="hidden md:flex md:flex-row justify-end items-center gap-2 pr-6 w-auto md:w-[900px] h-[60px]">
          {/* <span className="flex flex-row gap-2 items-center">
            <div className="side-menu-class flex flex-row gap-2 items-center justify-around">
              <Input
                className="w-[200px] h-[40px] border-0 rounded-none"
                placeholder="Search the site..."
              />
              <Button className="flex justify-center items-center h-[40px] w-[40px] rounded-none ">
                <FaSearch />
              </Button>
            </div>
          </span> */}

          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              <NavigationMenuItem className="bg-[#e6e6e6] text-[13px] font-semibold flex justify-center items-center h-[40px] w-auto px-4 rounded-none menu-item-cur">
                Entrepreneurs
              </NavigationMenuItem>
              <NavigationMenuItem className="bg-[#e6e6e6] text-[13px] font-semibold flex justify-center items-center h-[40px] w-auto px-4 rounded-none menu-item-cur">
                Investors
              </NavigationMenuItem>
              <NavigationMenuItem></NavigationMenuItem>
              <NavigationMenuItem className="bg-[#e6e6e6] hidden lg:flex text-[13px] font-semibold md:flex justify-center items-center h-[40px] w-auto px-4 rounded-none menu-item-cur">
                Mentors
              </NavigationMenuItem>
              <NavigationMenuItem className="hidden lg:block">
                <NavigationMenuTrigger className="rounded-none h-[40px] menu-item-cur">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="#">Components</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="#">Documentation</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="#">Blocks</Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="rounded-none h-[40px] menu-item-cur">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="#" className="flex-row items-center gap-2">
                          Resources
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="#" className="flex-row items-center gap-2">
                          Mentors
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="#" className="flex-row items-center gap-2">
                          Consultations
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="#" className="flex-row items-center gap-2">
                          Reporting
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/** Logo on header */}
        <div className="bg-none w-auto h-[70px] flex items-center justify-left mx-[25px]">
          <Link href={'/'}>
            <Image
              src="./Full_Logo.svg"
              alt="logo optimized"
              width={150}
              height={150}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
