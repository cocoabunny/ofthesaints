import React from "react";
// import Image from "next/image";
import { useSession, signOut, getSession } from "next-auth/react";
import GalleryNav from "./GalleryNavBar.jsx";

const Page = ({ articleCount = 0 }) => {
  const { data: session } = useSession();

  if (session) {
  return (
    
<div className="bg-chief h-screen w-full">
 <GalleryNav />
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
      <p className="bg-rose-200 mt-">
      thank you for leaving your details, enjoy the Gallery {session.user.name}
      </p>
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
