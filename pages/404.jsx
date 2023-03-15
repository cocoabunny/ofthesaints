import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="bg-orange-500">
      <h1>Bummer.....</h1>
      <h2>
        That page doesn't exist
        <br />
        Or does it?
      </h2>
    </div>
  );
};

export default NotFound;
