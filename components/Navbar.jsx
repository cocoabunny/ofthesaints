import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";

import FlightImage from "@/public/assets/flight.gif";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100] bg-[#4B584B]">
      <div className="flex justify-between items-center w-full px-2 2x:px-16">
        <Image src={FlightImage} alt="" width={85} height={85} />
        <button className="bg-[#B6772E] mr-2 p-2">
          <Link href="/login">Log In</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
