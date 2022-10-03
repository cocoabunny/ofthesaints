import { useSession, signIn, signOut } from "next-auth/react";

const LoginPage = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <p>Welcome {session.user.email}</p>
        <img
          src={session.user.image}
          alt="Avatar"
          style={{ borderRadius: "50px" }}
        />
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
