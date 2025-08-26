import Signin from "./signin";

export const Header = () => {
  return (
    <div className="w-full h-[100px] flex items-center justify-evenly px-[20px] bg-[#111]">
      <div className="bg-amber-700 w-full">tab 1</div>
      <div className="bg-blue-700 w-full">tab 2</div>
      <div>
        <Signin />
      </div>
    </div>
  );
};
