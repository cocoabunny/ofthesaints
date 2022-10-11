import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

const LoginPage = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <p>Welcome {session.user.email}</p>
        {/* <Image
          src={session.user.image}
          layout="fixed"
          height="200"
          width="200"
          alt="Avatar"
          style={{ borderRadius: "50px" }}
        /> */}
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return (
    <>
      <p>
        You are not signed in
        <br />
      </p>
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
};

export default LoginPage;
