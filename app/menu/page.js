import Footer from "@/components/Footer";
import Image from "next/image";
export default function Menu() {
       return (
         <div class="h-screen flex-col p-4 justify-items-center">
       <Image src="/menu1.png" alt="" width="800" height="1000" /> 
<Image src="/menu2.png" alt="" width="800" height="1000" /> 
<Image src="/menu4.png" alt="" width="800" height="800" /> 
<Image src="/chefrec.png" width={700} height={1000} alt="" />
<Footer />
            
         </div>
       );
     }
     
