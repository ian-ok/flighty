import router from "next/router";
import React from "react";
import NavBarButton from "./NavbarButton";

function NavBar() {
  return (
    <>
      <nav className="w-full sm:justify-start justify-center bg-slate-900 flex p-4 gap-4 text-white">
        <h1
          onClick={() => router.push("/")}
          className="text-xl sm:flex hidden font-semibold cursor-pointer"
        >
          Flighty
        </h1>
        <div className="gap-3 ml-3 flex flex-wrap">
          <NavBarButton
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="h-4 w-4 mr-2 mt-[2px]"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-11zm5 2h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-5 1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3zm9-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" />
              </svg>
            }
            text="Home"
            isActive={window.location.pathname === "/"}
            onClick={() => {
              router.push("/");
            }}
          />
          <NavBarButton
            icon={
              <text className="h-4 w-4 mr-1 mt-[-5px] font-bold text-xl">
                ?
              </text>
            }
            text="About"
            isActive={window.location.pathname === "/about"}
            onClick={() => {
              router.push("/about");
            }}
          />
        </div>
      </nav>
    </>
  );
}

export default NavBar;
