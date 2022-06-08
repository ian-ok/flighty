import React from "react";

interface NavBarButtonProps {
  text: string;
  icon?: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

function NavBarButton(props: NavBarButtonProps) {
  const { isActive, text, icon, onClick } = props;

  switch (isActive) {
    case true: {
      return (
        <button
          className="bg-indigo-600 hover:bg-indigo-700 px-3 text-sm rounded-lg transform active:scale-90 duration-300"
          onClick={onClick}
        >
          <div className="flex">
            {icon}
            {text}
          </div>
        </button>
      );
    }
    case false: {
      return (
        <button
          className="hover:bg-zinc-700 px-3 text-sm rounded-lg transform active:scale-90 duration-300"
          onClick={onClick}
        >
          <div className="flex">
            {icon}
            {text}
          </div>{" "}
        </button>
      );
    }
    default: {
      return (
        <button
          className="hover:bg-zinc-700 px-3 text-sm rounded-lg transform active:scale-90 duration-300"
          onClick={onClick}
        >
          <div className="flex">
            {icon}
            {text}
          </div>{" "}
        </button>
      );
    }
  }
}

export default NavBarButton;
