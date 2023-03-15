import React from "react";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import FlightImage from "@/public/assets/flight.gif";
import LeapImage from "@/public/assets/leap.gif";
import Image from "next/image";

const GalleryNavBar = () => {
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
      <div className="bg-burn text-cream">
        <div className="fixed w-full h-20 z-[100] bg-burn text-cream">
          <div className="flex justify-between items-center w-full px-2 2x:px-16">
            <div
              title="Project Title, Canaan de los Santos or Promise of the Saints"
              onPointerEnter={hoverHandler}
              onPointerLeave={outHandler}
            >
              {isShown ? (
                <h1>
                  <a href="/">de los Santos</a>
                </h1>
              ) : (
                <h1>
                  <a href="/">of the Saints</a>
                </h1>
              )}
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <div className="fixed w-full h-20 z-[100]">
      <div className="flex justify-between items-center w-full px-2 2x:px-16">
        <div
          title="Project Title, Canaan de los Santos or Promise of the Saints"
          onPointerEnter={hoverHandler}
          onPointerLeave={outHandler}
        >
          {isShown ? <h1>de los Santos</h1> : <h1>of the Saints</h1>}
        </div>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    </div>
  );
};

export default GalleryNavBar;
