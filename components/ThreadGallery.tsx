import React from 'react'
import Image from "next/image.js";
import testPicture from "../public/assets/gallery/Alpine Alpha-173.jpg";

const threadGallery = () => {
  return (
    <>

<div className="w-full h-full grid grid-cols-2 md:grid-cols-3 gap-5 px-10">
    <div className="grid gap-4">
        <div className="relative h-auto max-w-full group">
        <Image src={testPicture} alt="a test" className="h-auto max-w-full rounded-lg"/>
        <div className="absolute bottom-0 px-4 py-3 w-full transition-all transform top-8 translate-y-12 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
<h1 className="text-2xl font-semibold text-white">Stirrups</h1>
<p className="text-xl font-italic text-white"> High Country, Victoria 2022</p>
        </div>
        </div>

        <div>
        <Image src={testPicture} alt="a test" className="h-auto max-w-full rounded-lg"/>
        </div>
        <div>
        <Image src={testPicture} alt="a test" className="h-auto max-w-full rounded-lg"/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
        <Image src={testPicture} alt="a test" className="h-auto max-w-full rounded-lg"/>
        </div>
        <div>
        <Image src={testPicture} alt="a test" className="h-auto max-w-full rounded-lg"/>
        </div>
        <div>
        <Image src={testPicture} alt="a test" className="h-auto max-w-full rounded-lg"/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
        <Image src={testPicture} alt="a test" className="h-auto max-w-full rounded-lg"/>
        </div>
        <div>
        <Image src={testPicture} alt="a test" className="h-auto max-w-full rounded-lg"/>
        </div>
        <div>
        <Image src={testPicture} alt="a test" className="h-auto max-w-full rounded-lg"/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
        <Image src={testPicture} alt="a test" className="h-auto max-w-full rounded-lg"/>
        </div>
        <div>
        <Image src={testPicture} alt="a test" className="h-auto max-w-full rounded-lg"/>
        </div>
        <div>
        <Image src={testPicture} alt="a test" className="h-auto max-w-full rounded-lg"/>
        </div>
    </div>
</div>
    </>
  )
}

export default threadGallery