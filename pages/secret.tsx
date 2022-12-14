import React from "react";
// import Image from "next/image";
import { useSession, signOut, getSession } from "next-auth/react";

const Page = ({ articleCount = 0 }) => {
  const { data: session } = useSession();

  if (session) {
  return (
<div className="bg-chief h-screen w-full">
      <p className="bg-rose-200">
        This is a secret Page, congrats {session.user.name}
      </p>
      {/* <Image
          src={session.user.image}
          layout="fixed"
          height="200"
          width="200"
          alt=""
        /> */}
      {/* <p>{JSON.stringify(session)}</p> */}
      <button onClick={() => signOut()}>Sign Out</button>
      </div>
  );
      }
};

export default Page;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }

  const { name, email } = session.user;

  // Where to save?
  // - Airtable <-- Easy, through the Airtable API
  // - PlanetScale / MySQL <-- Less easy, either through an ORM like Prisma, or their Data API (still harder than AT)
  // - Log into console <-- Easy, but hard to find and collect the data

  // Resources
  // - Airtable
  // https://airtable.com/api
  // - PlanetScale
  // https://www.learnwithjason.dev/serverless-databases-with-planetscale-and-next-js
  // https://planetscale.com/blog/how-to-setup-next-js-with-prisma-and-planetscale

  // Extra Resources
  // - NextJS Flat File CMS (w/ Markdown) https://nextjs.org/blog/markdown

  return {
    props: {
      articleCount: 10,
    },
  };
};
