import Image from "next/image";
import Link from "next/link";
import React from "react";

import FlightImage from "@/public/assets/flight.gif";

const Navbar = () => {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100] bg-emerald-400/20">
      <div className="flex justify-between items-center w-full px-2 2x:px-16">
        <Image src={FlightImage} alt="" width={85} height={85} />
        <button className="bg-cyan-500 mr-2 p-2">
          <Link href="/login">Log In</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
