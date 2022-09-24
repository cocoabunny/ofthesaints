import React from 'react'
import { useSession, signOut, getSession } from 'next-auth/react'

const secret = () => {
const { data: session, status } = useSession();

if (status === 'authenticated') {
    return (
        <>
            <p>This is a secret Page, congrats {session.user.name}</p>
            <button onClick={()=> signOut()}>Sign Out</button>
        </>
    );
     } else {
    return (
        <>
            <p>Nice Try</p>
        </>
    );
    }
};

export default secret;

export const getServerSideProps = async (context)=> {
const session = await getSession(context);
if (!session) {
    return{
        redirect: {
            destination: '/login'
        }
    }
}
return {
    props: { session },
}
}