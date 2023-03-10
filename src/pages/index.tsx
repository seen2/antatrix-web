import Banner from "@/components/Banner";
import HowWeWork from "@/components/HowWeWork";
import TechStacks from "@/components/TechStacks";
import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { SSRProvider } from "react-bootstrap";

export default function Home() {
  return (
    <SSRProvider>
        <div className="content-1">
        <Header />
        <Banner />
        <HowWeWork />
        <TechStacks />
        <Footer />
        </div>
    </SSRProvider>
  );
}
