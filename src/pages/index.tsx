import Banner from "@/components/Banner";
import TechStacks from "@/components/TechStacks";
import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { SSRProvider } from "react-bootstrap";

export default function Home() {
  return (
    <SSRProvider>
        <Header />
        <Banner />
        <TechStacks />
    </SSRProvider>
  );
}
