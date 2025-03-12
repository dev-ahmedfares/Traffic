import AboutSec from "@/components/AboutSec";
import Articles from "@/components/Articles";
import Banner from "@/components/Banner";
import ContactUs from "@/components/ContactUs";
import Explore from "@/components/Explore";
import Hybrid from "@/components/Hybrid";
import LatestList from "@/components/LatestList";
import Pricing from "@/components/Pricing";
import Footer from "@/components/shared/Footer";
import SharedSpace from "@/components/SharedSpace";
// import Subscribe from "@/components/Subscribe";
import Titles from "@/components/Titles";
import Works from "@/components/Works";

export default function Home() {
  return (
    <div>
      <Banner />

      {/* About Section */}
      <AboutSec />

      {/* Latest Listing */}
      <LatestList />

      {/* Shared Space Section */}
      <SharedSpace />

      {/* Works Section */}
      <Works />

      {/* Hybrid */}
      <Hybrid />

      <Explore />

      <Pricing />

      <Articles />

      <ContactUs />

      <Titles />

      {/* <Subscribe /> */}

      {/* Footer */}

      <Footer />
    </div>
  );
}
