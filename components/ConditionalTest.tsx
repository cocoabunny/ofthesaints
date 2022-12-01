import React from "react";
import { useSession } from "next-auth/react";

interface IConditionalTestProps {
  status: string;
}

const ConditionalTest = ({ status }: IConditionalTestProps) => {
  if (status === "authenticated") {
    return <h1>Authenticated Page</h1>;
  }

  return <h1>Un-Authenticated Page</h1>;
};

export default ConditionalTest;
