import { span } from 'motion/react-client';
import Image from 'next/image';

const blocks = ['1', '2', '3', '4'];

export default function What() {
  return (
    <div className="flex justify-center items-center h-auto w-full">
      <div className="md:hidden">
        <div className="w-full bg-[#1d1d1d] h-[500px] pb-5">
          <div>
            <h1 className="text-5xl h-[100px] text-[#e9e9e9] px-4 flex justify-start items-center">
              what are we?
            </h1>
          </div>
          <div className="p-5 bg-[#373738] h-auto w-[90%] mx-[5%] md:w-[500px]">
            <span className="text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde,
              adipisci recusandae similique rerum dolorem fuga voluptatum magni
              autem nostrum ut, saepe, deleniti fugiat vel reprehenderit vero
              numquam? molestias? temporibus sint vitae velit, sapiente,
              veritatis et facilis quam maxime assumenda numquam? Laborum quod
              autem consequatur reiciendis ex blanditiis, culpa illum unde
              maxime at iure? Iste, aspernatur.
            </span>
          </div>
        </div>
      </div>

      {/* <div className="grid grid-cols-5 grid-rows-4 gap-4">
          {blocks.map((index, key) => (
            <span
              key={key}
              className="h-[100px] w-[100px] flex justify-center items-center bg-[#c7c7c7]"
            >
              {index}
            </span>
          ))}
        </div> */}
      <div className="hidden md:block">
        <div>
          <h1 className="h-[70px] my-2 w-full flex justify-start items-center font-semibold text-2xl p-2 bg-[#dadada]">
            Who are we?
          </h1>
        </div>
        <div className=" md:flex md:flex-row md:justify-center w-full h-[400px]">
          <div className="flex justify-center items-center mx-2">
            <div className="h-[300px] w-[300px] bg-[#7a7a7a] relative flex justify-center items-center overflow-hidden">
              <Image
                width={980}
                height={980}
                alt=""
                src={'/bl_3.jpg'}
                className="object-fill "
              />
            </div>
          </div>

          <div className="p-5 bg-[#373738] h-auto md:w-[400px]">
            <h1 className="h-[50px] w-full flex justify-start items-center font-semibold text-2xl p-2 bg-[#dadada]">
              Information
            </h1>
            <span className="text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde,
              adipisci recusandae similique rerum dolorem fuga voluptatum magni
              autem nostrum ut, saepe, deleniti fugiat vel reprehenderit vero
              numquam? molestias? temporibus sint vitae velit, sapiente,
              veritatis et facilis quam maxime assumenda numquam? Laborum quod
              autem consequatur reiciendis ex blanditiis, culpa illum unde
              maxime at iure? Iste, aspernatur.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
