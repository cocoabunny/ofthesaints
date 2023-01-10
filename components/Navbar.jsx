import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import FlightImage from "@/public/assets/flight.gif";
import LeapImage from "@/public/assets/leap.gif";

const Navbar = () => {
  const { data: session } = useSession();

  if (session && session.user)
    return (
      <div className="bg-burn text-cream">
        <div className="fixed w-full h-20 shadow-xl z-[100] bg-burn text-cream">
          <div className="flex justify-between items-center w-full px-2 2x:px-16">
            <Image
              src={LeapImage}
              alt="jumping blob"
              width={85}
              height={85}
              className=""
            />
            <button className="bg-chief mr-2 p-2" onClick={() => signOut()}>
              Sign Out
            </button>
          </div>
        </div>
      </div>
    );
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100] bg-chief text-coco">
      <div className="flex justify-between items-center w-full px-2 2x:px-16">
        <Image src={FlightImage} alt="flying blob" width={85} height={85} />
        <button className="bg-[#B6772E] mr-2 p-2">
          <Link href="/login">Log In</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
