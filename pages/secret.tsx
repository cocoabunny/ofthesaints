import React from "react";
// import Image from "next/image";
import { useSession, signOut, getSession } from "next-auth/react";
import GalleryNav from "./GalleryNavBar.jsx";
import goodByeLogo from "../public/assets/flight.gif";
import Image from "next/image.js";
import firstPicture from "../.next/static/media/Gallery/Bek-4010.jpg";


const Page = ({ articleCount = 0 }) => {
  const { data: session } = useSession();

  if (session) {
  return (
    
<div className="bg-chief h-screen sw-full">
 <GalleryNav className=""/>
 {/* <br/>
 <br/>
 <br/>
 <br/>
 <br/> */}
      <h1 className="bg-rose-200 mt-2">
     Welcome to Galleria de los Santos {session.user.name}
      </h1>
      
      <button onClick={() => signOut()}>Sign Out</button>
      
      <div class="container mx-auto space-y-1 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3">
    <div class="w-full rounded">
        <Image 
        src={firstPicture} 
        width={500}
        height={500}
        alt="picture"
        />
</div>
</div>
       {/* Footer */}
       <section className=" py-10 mb-20 bg-burn w-full">
<div className="flex-col">
  <Image src={goodByeLogo} 
  alt="8 bit emoji, waving goodbye" 
  layout="fixed"
  height="50"
  width="50" />
<ul>
    <li><a href="https://www.linkedin.com/in/canaan-de-los-santos-18b370240">LinkedIn</a></li>
    <li><a href="https://github.com/cocoabunny">GitHub</a></li>
    <li><a className="hover:text-chief" href="mailto:canaandelossantos@gmail.com">canaandelossantos@gmail.com</a></li>
    </ul>
    <button onClick={() => signOut()}>Sign Out</button>
</div>
          </section>
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
