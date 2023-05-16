import Image from "next/image";
import React from "react";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import FlightImage from "@/public/assets/flight.gif";
import LeapImage from "@/public/assets/leap.gif";

const Navbar = () => {
  const { data: session } = useSession();
  const [isShown, setIsShown] = useState(false);

  const hoverHandler = () => {
    setIsShown(true);
  };
  const outHandler = () => {
    setIsShown(false);
  };

  if (session && session.user)
    return (
      <div className="">
        <div className="w-full h-30 z-[100]">
          <div className="flex justify-between items-center w-full px-2 2x:px-16">
            <div
              title="Take me home country roads ;)"
              onPointerEnter={hoverHandler}
              onPointerLeave={outHandler}
            >
              {isShown ? (
                <h1>
                  <a href="/secret.tsx">de los Santos</a>
                </h1>
              ) : (
                <h1>
                  <a href="/secret.tsx">of the Saints</a>
                </h1>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  return (
    <div className="w-full h-30 z-[100]">
      <div className="flex justify-between items-center w-full px-2 2x:px-16">
        <div
          title="Take me home country roads ;)"
          onPointerEnter={hoverHandler}
          onPointerLeave={outHandler}
        >
          {isShown ? (
            <h1>
              <a href="/secret.tsx">de los Santos</a>
            </h1>
          ) : (
            <h1>
              <a href="/secret.tsx">of the Saints</a>
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
