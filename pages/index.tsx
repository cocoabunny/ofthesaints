import Head from "next/head";
import React from "react";
import { useSession } from "next-auth/react";
import Navbar from "../components/Navbar";
import ConditionalTest from "../components/ConditionalTest";
import ITA_Pic from "public/assets/ITA_ScreenShot.png";
import Image from "next/image";
import goodByeLogo from "../public/assets/flight.gif";


const Page = () => {
  const { data, status } = useSession();

  return (
    <div className="font-studio">
      <div
        className={`${
          status === "authenticated"
            ? "bg-cream text-coco"
            : "bg-coco text-cream"
        } `}
      >
        <Head>
          <title>Of The Saints</title>
          <meta name="description" content="Canaan de los Santos' Portfolio" />
          <link rel="icon" href="/coco_test.ico" />
        </Head>

        <Navbar />

        <div className="pt-20">
          <ConditionalTest status={status} />
        </div>
        <main className="">
          {/* -- About Section --  */}
          <section className="pt-20">
            <h2>Introductio</h2>
            <h3>About CTA</h3>
            <p>Lorem Ipsum it so fiddley day a way to play</p>
            <a href="/public/assets/cdd.resume.v3.pdf" attributes-list download className="hover:text-chief">Resume</a>
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
              {status === "authenticated" ? <h1>Aromatic</h1> : <h1>Stinky</h1>}
              <h1
                className={`text-3xl text-bold ${
                  status === "authenticated" ? "text-black" : "text-red-500"
                }`}
              >
                {status === "authenticated" ? "Aromatic" : "Stinky"}
              </h1>
              <h2><a href="https://www.itapanels.com/" className="hover:bg-chief">ITA Panels</a></h2>
              <br />
              <Image src={ITA_Pic} alt="Screenshot of ITA Panels Website" width="600" height="350"/> <br/>
              <br/>
              <a href="https://github.com/cocoabunny/ita_draft" className="hover:bg-chief">Repository</a>
              <h3>Technologies</h3> <br/>
              <ul>
                <li>Tailwind CSS</li>
                <li>React</li>
                <li>Figma</li>
                <li>Photoshop</li>
                <li>Lightroom</li>
                <li>Vercel</li>
              </ul>
              <br />
              <div>
              {/* <Image 
              src={ITA_Pic}
                alt="Screenshot of ITA Panels Website"
                layout="fixed"
                height="200"
                width="200" /> */}
                
              </div>
              <p>
                For ITA Panels, the owner needed a site that would point
                customers to his business email, work phone, address; as well as
                explain the services he provided.I used Figma in early April to
                design the site, after obtaining approval, the development
                began. From mid April until mid May, I coded a multi page
                website, photographed his shop, and wrote out his site content
                for him. In addition I used Tailwind CSS to make the entire
                website mobile responsive. After creating the final production
                build, the last piece of the puzzle was deploying the site to a
                host. Vercel has integration for CRA and Next React Framework
                projects, so I chose to pay for the domain through vercel and
                host the entire site.
                <br />
                To date this site has had 1500 visitors.
              </p>
            </span>
            <div>{/* <ProjectCard /> */}</div>
          </section>
          <section className="py-10 bg-burn w-full">
            <h3>Thanks for reading<br/>Login to follow the rabbit trail</h3>
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
</div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Page;
