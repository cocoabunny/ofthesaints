import React from "react";
import { useSession } from "next-auth/react";

const conditionalTest = () => {
  const { data: session } = useSession();

  if (session === "Authenticated") {
    return <h1>Hey were working Kablam!</h1>;
  }
  return <h1> Hey youre supposed to be logged in scrub</h1>;
};

export default conditionalTest;
