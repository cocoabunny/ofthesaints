import Head from "next/head";
import React from "react";
import { useSession } from "next-auth/react";
import Navbar from "../components/Navbar";
import ConditionalTest from "../components/ConditionalTest";
import ITA_Pic from "public/assets/ITA_ScreenShot.png";
import Image from "next/image";
import goodByeLogo from "../public/assets/flight.gif";
import { useState } from "react";
import {AiOutlineHtml5 } from "react-icons/ai";
import {DiCss3} from "react-icons/di";
import {SiTailwindcss, SiJavascript, SiNextdotjs, SiCoda, SiFigma, SiAdobelightroom, SiAdobephotoshop, SiAdobexd} from "react-icons/si";
import {FaReact} from "react-icons/fa";
import {TbBrandBootstrap} from "react-icons/tb";
import {GrMysql} from "react-icons/gr";
import {RxVercelLogo} from "react-icons/rx";





const Page = () => {
  const { data, status } = useSession();
  const [isShown, setIsShown] = useState(false);

  const hoverHandler = () => {
    setIsShown(true)
    
  }
  const outHandler = () => {
    setIsShown(false)
  }


  return (
    <div className="font-studio">
      {/* conditional rendering for background color */}
      <div className={`${
          status === "authenticated"
            ? "bg-cream m-[.5rem] text-coco w-full"
            : "bg-coco text-cream m-[.5rem] w-full"
        } `}>
        <Head>
          <title>Of The Saints</title>
          <meta name="description" content="Canaan de los Santos' Portfolio" />
          <link rel="icon" href="/coco_test.ico" />
        </Head>
        <Navbar />

        {/* <div className="pt-20">
          <ConditionalTest status={status} />
        </div> */}
        <main className="">
          {/* -- About Section --  */}
          <section className="pt-20">
           <div
           title="Project Title, Canaan de los Santos or Promise of the Saints"
           onPointerEnter={hoverHandler}
           onPointerLeave={outHandler}
           >{isShown ? <h1>Canaan de los Santos</h1> : <h1>Promise of the Saints</h1>}</div>
                       <p>Howdy, <br/>I am a passionate developer and photographer, specializing in providing creative and practical solutions for small businesses. If you're looking for a front end developer to add to your team, have a business that needs to a website, or have any photography needs, I would love to hear from you! </p>
            
          </section>          
          {/* --Skills-- */}
          <section className="my-10 mx-10">
            <span>
              <h2>Tech I work with </h2>
            </span>
            <ul className="grid grid-cols-2 gap-2 border-solid border-[.1em] rounded-md border-burn pb-2 pr-2">
              <li className="bg-cream m-[.5rem] pl-3 text-coco text-5xl rounded-md shadow-xl "><AiOutlineHtml5 /></li>
              <li className="bg-cream m-[.5rem] pl-3 text-coco text-5xl rounded-md shadow-xl"><DiCss3/></li>
              <li className="bg-cream m-[.5rem] pl-3 text-coco text-5xl rounded-md shadow-xl"><SiTailwindcss/></li>
              <li className="bg-cream m-[.5rem] pl-3 text-coco text-5xl rounded-md shadow-xl"><SiJavascript/></li>
              <li className="bg-cream m-[.5rem] pl-3 text-coco text-5xl rounded-md shadow-xl"><FaReact/></li>
              <li className="bg-cream m-[.5rem] pl-3 text-coco text-5xl rounded-md shadow-xl"><SiNextdotjs/></li>
              <li className="bg-cream m-[.5rem] pl-3 text-coco text-5xl rounded-md shadow-xl"><TbBrandBootstrap/></li>
              <li className="bg-cream m-[.5rem] pl-3 text-coco text-5xl rounded-md shadow-xl"><GrMysql/></li>
              <li className="bg-cream m-[.5rem] pl-3 text-coco text-5xl rounded-md shadow-xl"><SiFigma/></li>              
              <li className="bg-cream m-[.5rem] pl-3 text-coco text-5xl rounded-md shadow-xl"><SiAdobelightroom/></li>
              <li className="bg-cream m-[.5rem] pl-3 text-coco text-5xl rounded-md shadow-xl"><SiAdobephotoshop/></li>
              <li className="bg-cream m-[.5rem] pl-3 text-coco text-5xl rounded-md shadow-xl"><SiAdobexd/></li>
              <li className="bg-cream m-[.5rem] pl-3 text-coco text-5xl rounded-md shadow-xl"><RxVercelLogo/></li>
              <li className="bg-cream m-[.5rem] pl-3 text-coco text-5xl rounded-md shadow-xl"><SiCoda/></li>
            </ul>
            <button className="bg-cream m-[.5rem] text-coco rounded-md shadow-xl my-5">
              <a href="/public/assets/cdd.resume.v3.pdf" attributes-list download className="hover:text-chief">Resume</a>
              </button>
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
