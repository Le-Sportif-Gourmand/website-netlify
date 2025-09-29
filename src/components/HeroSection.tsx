import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import flanProduct from "@/assets/flan-product.png";
import banniereDebris from "@/assets/banniere-flan.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: "var(--gradient-hero)"
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Texte */}
          <div className="text-center lg:text-left animate-slide-in">
            <Badge variant="outline" className="mb-6 border-primary text-primary">
              Nouveau produit
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Le Flan Pâtissier
              <span className="block text-primary">Protéiné</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              La première pâtisserie qui allie plaisir gourmand et performance sportive. 
              <strong className="text-primary"> 20g de protéines</strong> par portion, 
              <strong className="text-primary"> 250 kcal</strong> seulement.
            </p>

            {/* Badges produit */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
              <Badge className="bg-primary text-primary-foreground">
                20g de protéines
              </Badge>
              <Badge variant="secondary">
                250 kcal
              </Badge>
              <Badge variant="outline">
                Aucun additif controversé
              </Badge>
              <Badge variant="outline" className="border-accent text-accent">
                Fabriqué en France
              </Badge>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl">
                Découvrir nos points de vente
              </Button>
              <Button variant="outline" size="lg">
                En savoir plus
              </Button>
            </div>
          </div>

          {/* Image produit */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative animate-float">
              {/* Image de marketing comme background décoratif */}
              <div className="absolute -inset-10 opacity-20">
                <img 
                  src={banniereDebris} 
                  alt="" 
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Image produit principale */}
              <div className="relative z-10">
                <img 
                  src={flanProduct} 
                  alt="Flan Pâtissier Protéiné" 
                  className="w-80 h-80 object-contain drop-shadow-2xl"
                />
              </div>
              
              {/* Effet de glow doré */}
              <div 
                className="absolute inset-0 rounded-full opacity-30 blur-xl"
                style={{
                  background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)"
                }}
              />
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;