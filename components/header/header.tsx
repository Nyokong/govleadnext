/**Mobile first approach */

import Signin from "./signin";
import { AiOutlineMenu } from "react-icons/ai";

/** Sheet menu  */
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Header = () => {
  return (
    <div className="w-full h-[150px] flex flex-col items-center ">
      <div className="flex flex-row justify-center items-center text-[10px] h-[20px]">
        top layer for contact details
      </div>
      <div className="flex flex-row w-full">
        <div className="bg-none h-[70px] w-[70px] flex items-center justify-center">
          <Sheet>
            <SheetTrigger>
              <AiOutlineMenu size={25} />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        <div className="bg-none w-full h-[70px] flex items-center justify-center">
          logo goes here
          <div>
            <Signin />
          </div>
        </div>
      </div>
    </div>
  );
};
