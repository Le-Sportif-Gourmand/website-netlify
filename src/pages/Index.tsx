import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PartnerCarousel from "@/components/PartnerCarousel";
import GoogleReviews from "@/components/GoogleReviews";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PartnerCarousel />
        <GoogleReviews />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
