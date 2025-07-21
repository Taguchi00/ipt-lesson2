import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { UploadButton } from "~/utils/uploadthing";
import { UploadDialog } from "./_components/upload-dialog";

async function Image() {

 const mockUrls = [
  "https://images.surferseo.art/84983c66-e859-4bcd-8155-b40faeca38e0.jpeg", 
  "https://wallpaperset.com/w/full/2/5/a/377225.jpg", 
  "https://hrt65nw6hk.ufs.sh/f/dh3kb0FvL2kIrTBTfaDMx9jHhSR1muwaX2P5dtEI8qJv3GQe",
  "https://hrt65nw6hk.ufs.sh/f/dh3kb0FvL2kITEEBtnimoaNRAWShYtEpFM9XGcKPfOLrsiq1"
 ];

 const images = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
 }));

  return (
    <div>
      <div className="flex justify-end p-4">
        <UploadDialog />
      </div>
     <div className="flex flex-wrap justify-center gap-6 p-4">
     {images.map((image) => (
       <div key={image.id} className="flex w-64 flex-col">
        <div className="relative aspect-video bg-zinc-900">
        <img src={image.url} alt={'Image ${image.id}'} 
        className="h-full w-full object-cover object-top"/>
        </div>
        <div className="text-center">{image.id}</div>
      </div>
     ))}
    </div>
    </div>
  );
 }


export default function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl"> 
          Please Sign In Above to Continue!
          </div>
      </SignedOut>
      <SignedIn>
          <div className="h-full w-full text-center text-2xl">  
            Welcome Back!
            <Image />
            </div>
      </SignedIn>
    </main>
  );
}
