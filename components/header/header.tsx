import Signin from "./signin";

export const Header = () => {
  return (
    <div className="w-full h-[100px] flex items-center justify-center">
      Header goes here.
      <br />
      Add a button here
      <Signin />
    </div>
  );
};
