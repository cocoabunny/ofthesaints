import Head from "next/head";
import React from "react";
import { useSession, getSession } from "next-auth/react";
import { unstable_getServerSession } from "next-auth/next";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import ConditionalTest from "../components/ConditionalTest";
import { Session } from "next-auth";
import { authOptions } from './api/auth/[...nextauth]';
import { GetServerSideProps } from "next/types";

const Page = () => {
  const { data, status } = useSession();

  return (
    <div className={`${status === 'authenticated' ? 'bg-yellow-900' : '' }`}>
      <Head>
        <title>Of The Saints</title>
        <meta name="description" content="Canaan de los Santos' Portfolio" />
        <link rel="icon" href="/coco_test.ico" />
      </Head>

      <Navbar />
    
      <div className="pt-20">
        <ConditionalTest status={status} />
      </div>
      <main>
        {/* -- About Section --  */}
        <section className="pt-20">
          <span>
            <h2>Introductio</h2>
          </span>
          <h3>About CTA</h3>
          <p>Lorem Ipsum it so fiddley day a way to play</p>
        </section>

        {/* --Skills-- */}
        <section className="py-10">
          <span>
            <h2>Skills</h2>
          </span>
          <h3>Skills CTA</h3>
          <ul>
            <li>A skill</li>
            <li>A skill</li>
            <li>A skill</li>
            <li>A skill</li>
            <li>A skill</li>
            <li>A skill</li>
            <li>A skill</li>
          </ul>
        </section>

        {/* -- Portfolio --  */}
        <section className="py-10">
          <span>
            {
            status === 'authenticated' 
              ? <h1>Aromatic</h1> 
              : <h1>Stinky</h1>
            }
            <h1 className={`text-3xl text-bold ${status === 'authenticated' ? 'text-black' : 'text-red-500'}`}>
              {status === 'authenticated' ? 'Aromatic' : 'Stinky'}
            </h1>
            <h2>ITA Panels</h2>
            <br />
            <h3>Technologies</h3> <br />
            <ul>
              <li>Tailwind CSS</li>
              <li>React</li>
              <li>Figma</li>
              <li>Photoshop</li>
              <li>Lightroom</li>
              <li>Vercel</li>
            </ul>
            <br />
            <image alt="Screenshot of ITA Panels Website" loading="lazy" src="">
              WEBSITE IMAGE
            </image>
            <p>
              For ITA Panels, the owner needed a site that would point customers
              to his business email, work phone, address; as well as explain the
              services he provided.I used Figma in early April to design the
              site, after obtaining approval, the development began. From mid
              April until mid May, I coded a multi page website, photographed
              his shop, and wrote out his site content for him. In addition I
              used Tailwind CSS to make the entire website mobile responsive.
              After creating the final production build, the last piece of the
              puzzle was deploying the site to a host. Vercel has integration
              for CRA and Next React Framework projects, so I chose to pay for
              the domain through vercel and host the entire site.
              <br />
              To date this site has had 1500 visitors.
            </p>
          </span>
          <div>{/* <ProjectCard /> */}</div>
        </section>
      </main>
    </div>
  );
};

export default Page;