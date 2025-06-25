

import ChefRecommends from "@/components/ChefRecommends";
import Footer from "@/components/Footer";
import OurStory from "@/components/OurStory";
import Image from "next/image";


export default function Home() {
  return (
    <div class="h-screen flex-col p-4 justify-items-center">
      <h1 className="text-4xl font-bold">Welcome to Moon River Thai</h1>
      <Image src="/logo.png" alt="" width={800} height={1000} />
      <p className="mt-4 text-lg">Enjoy the best food in town!</p>
     
      <OurStory />
      <Footer />
    </div>
  );
}
