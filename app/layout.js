
import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
export const metadata = {
  title: "Moon River Thai Cuisine",
 
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
    

        </body>
        </html>
  );
}
