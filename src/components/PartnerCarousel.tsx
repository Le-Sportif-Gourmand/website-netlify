import partnerCtcpa from "@/assets/partner-ctcpa.png";
import partnerBpi from "@/assets/partner-bpi.png";
import partnerPepite from "@/assets/partner-pepite.png";
import madeInFrance from "@/assets/made-in-france.png";

const PartnerCarousel = () => {
  const partners = [
    { name: "CTCPA", logo: partnerCtcpa },
    { name: "BPI France", logo: partnerBpi },
    { name: "Pépite France", logo: partnerPepite },
    { name: "Fabriqué en France", logo: madeInFrance },
    // Duplicate for seamless scrolling
    { name: "CTCPA", logo: partnerCtcpa },
    { name: "BPI France", logo: partnerBpi },
    { name: "Pépite France", logo: partnerPepite },
    { name: "Fabriqué en France", logo: madeInFrance },
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Ils nous font confiance
        </h2>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 mx-8 flex items-center justify-center"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-16 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerCarousel;