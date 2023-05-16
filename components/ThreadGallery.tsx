import React from 'react'
import Image from "next/image.js";
import testPicture from "../public/assets/gallery/Alpine Alpha-173.jpg";

const threadGallery = () => {
  return (
    <>

<div className="w-full h-full grid grid-cols-2 md:grid-cols-3 gap-5 px-10">
    <div className="grid gap-4">
        <div className="relative h-auto max-w-full">
        <Image src={testPicture} alt="a test" className="h-auto max-w-full rounded-lg"/>
        <div className="absolute bottom-0 px-4 py-3 w-full">
<h1 className="text-2xl font-semibold text-gray-200">Stirrups</h1>
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