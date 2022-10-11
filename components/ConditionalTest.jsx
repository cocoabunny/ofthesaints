import React from "react";
import { useSession } from "next-auth/react";

const ConditionalTest = () => {
  const session = useSession();
  if (session) return <div>Please Work</div>;
};

export default ConditionalTest;
