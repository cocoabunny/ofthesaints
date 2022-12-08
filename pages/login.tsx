import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

const LoginPage = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div>
        <p>
          Welcome {session.user.name}
        </p>
{/* <Image src={session.user.image} alt="lol" layout="fill"/> */}

        {/* <Image
          src={session.user.image}
          layout="fixed"
          height="200"
          width="200"
          alt="Avatar"
          style={{ borderRadius: "50px" }}
        /> */}
        <button className="bg-blue-300" onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }

  return (
    <>
      <p>
        Currently you are not signed, in.
        <br />
        Would you like to change that?
      </p>
      <button className="bg-red-300" onClick={() => signIn()}>Sign in</button>
    </>
  );
};

export default LoginPage;
