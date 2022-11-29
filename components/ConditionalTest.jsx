import React from "react";
import { useSession } from "next-auth/react";

const conditionalTest = () => {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return <h1>Authenticated Page</h1>;
  } else {
    return <h1>Un-Authenticated Page</h1>;
  }
};

export default conditionalTest;
