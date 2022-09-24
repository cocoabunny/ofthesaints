import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
       <p> Welcome {session.user.email} </p>
       <image src={session.user.image} alt="Avatar" style={{borderRadius: '50px'}}/>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      You are not signed in<br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}