import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
// import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const LoginPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    
    if (session && session.user) {
      interval = setTimeout(() => {
        router.push("/");
      }, 5000);
    }

    return () => interval && clearInterval(interval);
  }, [router, session]);

  if (session && session.user) {
    return (
      <div className="bg-[#4B584B] bg-cover">
        <div>
          <h1>Welcome {session.user.name}</h1>
          <h2>follow the rabbit trail for a surprise...</h2>
        </div>

        <Image
          src={session.user.image}
          layout="fixed"
          height="200"
          width="200"
          alt="Avatar"
          style={{ borderRadius: "50px" }}
        />
        <button className="bg-blue-300" onClick={() => signOut()}>
          Sign out
        </button>
      </div>
    );
  }

  return (
    <div className="h-screen w-full bg-gradient-to-br from-[#DDD6A8] to-[#ECA3AA]">
      <h1>
        Currently you are not signed, in.
        <br />
        Would you like to change that?
      </h1>
      <button className="bg-ita" onClick={() => signIn()}>
        Sign in
      </button>
    </div>
  );
};

export default LoginPage;
