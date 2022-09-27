import Head from 'next/head';
import React from 'react';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
// import {useSession} from 'next-auth/react';

// if (status === 'authenticated') 
export default function Component() {

  // const { data: session, status } = useSession();

      return(
    <div >
      <Head>
        <title>Of The Saints</title>
        <meta name="description" content="Canaan de los Santos' Portfolio" />
        <link rel="icon" href="/coco_test.ico" />
      </Head>
<Navbar />
<body className='pt-[5em]'>
{/* -- About Section --  */}
<section className='py-10'>
<span>
<h2>About</h2>
</span>
  <h3>About CTA</h3>
  <p>Lorem Ipsum it so fiddley day a way to play</p>
</section>
{/* --Skills-- */}
<section className='py-10'>
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
<section className='py-10'>
<span>
<h2>Folio</h2>
</span>
 <div>
  <ProjectCard />
 </div>
</section>

</body>
    </div>
      )
       }
  
