import Head from "next/head";
import React from "react";
import { useSession } from "next-auth/react";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import ConditionalTest from "../components/ConditionalTest";

const Page = () => {
  const { status } = useSession();

  return (
    <div className="">
      <Head>
        <title>Of The Saints</title>
        <meta name="description" content="Canaan de los Santos' Portfolio" />
        <link rel="icon" href="/coco_test.ico" />
      </Head>
      <Navbar />
      <div className="pt-20">
        {/* <ConditionalTest /> */}
        <ConditionalTest status={status} />
      </div>
      <main>
        {/* -- About Section --  */}
        <section className="pt-20">
          <span>
            <h2>About</h2>
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
            <h2>Folio</h2>
          </span>
          <div>{/* <ProjectCard /> */}</div>
        </section>
      </main>
    </div>
  );
};

export default Page;
