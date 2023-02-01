import Banner from "@/components/Banner";
import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { SSRProvider } from "react-bootstrap";

export default function Home() {
  return (
    <SSRProvider>
      <div>
        <Header />
        <Banner />
      </div>
    </SSRProvider>
  );
}
