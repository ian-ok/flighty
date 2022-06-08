import { FC } from "react";
import Switch from "./Switch";

interface IProps {
  children?: React.ReactNode;
}

function HeroCard(props: IProps) {
  return (
    <>
      <div className="text-white sm:w-96 w-72 h-96 bg-zinc-600 shadow-xl hover:shadow-2xl duration-300 bg-opacity-20 p-6 rounded-lg">
        <h1 className="text-white text-4xl">Flight site</h1>
        <p className="text-gray-300/90">Does cool flight site things</p>
        <div className="flex flex-col mt-6 gap-2">{props?.children}</div>
      </div>
    </>
  );
}

export default HeroCard;
