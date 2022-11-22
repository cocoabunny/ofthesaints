import React from "react";
import { useSession } from "next-auth/react";

const conditionalTest = () => {
  const { data: session } = useSession();

  if (session === "Authenticated") {
    return <h1>Authenticated Page</h1>;
  }
  return <h1>Un-Authenticated Page</h1>;
};

export default conditionalTest;
