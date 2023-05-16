import React from 'react'
import Image from "next/image.js";
import testPicture from "../public/assets/gallery/Alpine Alpha-173.jpg";

const threadGallery = () => {
  return (
<>
    <h1>TItle</h1>
    <div className="w-full h-full grid grid-cols-2 md:grid-cols-3 gap-5 px-10">
    <div className="grid gap-4">
        <div className="relative h-auto max-w-full">
        <Image src={testPicture} alt="a test" className="h-auto max-w-full rounded-lg"/>
        <div className="absolute bottom-0 px-4 py-3 w-full">
      <h1 className="font-semibold text-4xl"> Kittens are cute </h1>
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
    <div/>
    </>
  )
}

export default threadGallery