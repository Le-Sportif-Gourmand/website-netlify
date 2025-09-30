import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, ExternalLink } from "lucide-react";

const OuNousTrouver = () => {
  const [mapApiKey, setMapApiKey] = useState("");
  const [showMap, setShowMap] = useState(false);

  // Points de vente fictifs pour la démo
  const salesPoints = [
    {
      id: 1,
      name: "Fitness Park République",
      address: "45 Boulevard du Temple, 75003 Paris",
      phone: "01 42 74 17 11",
      hours: "Lun-Dim: 6h-23h",
      type: "Salle de sport",
      coordinates: { lat: 48.8647, lng: 2.3641 }
    },
    {
      id: 2,
      name: "Bio c' Bon Marais",
      address: "23 Rue des Rosiers, 75004 Paris",
      phone: "01 44 54 93 85",
      hours: "Lun-Sam: 8h30-20h, Dim: 9h-19h",
      type: "Magasin bio",
      coordinates: { lat: 48.8571, lng: 2.3614 }
    },
    {
      id: 3,
      name: "Naturalia Châtelet",
      address: "8 Rue de Rivoli, 75004 Paris",
      phone: "01 40 26 03 91",
      hours: "Lun-Sam: 8h-21h, Dim: 9h-20h",
      type: "Magasin bio",
      coordinates: { lat: 48.8566, lng: 2.3485 }
    },
    {
      id: 4,
      name: "L'Orange Bleue Bastille",
      address: "12 Rue de la Roquette, 75011 Paris",
      phone: "01 47 00 47 28",
      hours: "Lun-Ven: 6h-23h, Sam-Dim: 8h-20h",
      type: "Salle de sport",
      coordinates: { lat: 48.8532, lng: 2.3723 }
    }
  ];

  const handleShowMap = () => {
    if (mapApiKey.trim()) {
      setShowMap(true);
    } else {
      alert("Veuillez entrer votre clé API Google Maps");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Où nous <span className="text-primary">Trouver</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez tous les points de vente où vous pouvez vous procurer nos flan pâtissiers protéinés. 
              Disponibles dans les salles de sport partenaires et magasins bio sélectionnés.
            </p>
          </div>

          {/* Configuration de la carte */}
          {!showMap && (
            <Card className="mb-8 border-primary/20">
              <CardHeader>
                <CardTitle className="text-center">Afficher la carte interactive</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-center text-muted-foreground">
                  Pour afficher la carte interactive avec tous nos points de vente, 
                  veuillez entrer votre clé API Google Maps :
                </p>
                <div className="flex gap-4 max-w-md mx-auto">
                  <Input
                    type="text"
                    placeholder="Clé API Google Maps"
                    value={mapApiKey}
                    onChange={(e) => setMapApiKey(e.target.value)}
                  />
                  <Button onClick={handleShowMap}>
                    Afficher
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground text-center">
                  Obtenez votre clé API sur{" "}
                  <a 
                    href="https://console.cloud.google.com/apis/credentials" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Google Cloud Console
                  </a>
                </p>
              </CardContent>
            </Card>
          )}

          {/* Carte interactive (placeholder) */}
          {showMap && (
            <Card className="mb-8">
              <CardContent className="p-0">
                <div className="h-96 bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                    <p className="text-lg font-semibold">Carte Google Maps</p>
                    <p className="text-muted-foreground">
                      Ici s'afficherait la carte interactive avec les {salesPoints.length} points de vente
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Liste des points de vente */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {salesPoints.map((point) => (
              <Card key={point.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg mb-1">{point.name}</CardTitle>
                      <span className="text-sm text-primary font-medium">{point.type}</span>
                    </div>
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{point.address}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <span className="text-sm">{point.hours}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <span className="text-sm">{point.phone}</span>
                  </div>
                  <div className="pt-2">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(point.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors text-sm"
                    >
                      <span>Voir sur Google Maps</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Informations supplémentaires */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Vous êtes un professionnel ?</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Vous souhaitez référencer nos produits dans votre établissement ? 
                  Contactez notre équipe commerciale pour découvrir nos conditions de partenariat.
                </p>
                <Button>
                  Devenir partenaire
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-center">Livraison</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  La livraison à domicile n'est pas encore disponible. 
                  Contactez-nous pour nous faire part de votre intérêt !
                </p>
                <Button variant="outline">
                  Manifester votre intérêt
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Call to action */}
          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold mb-4">Vous ne trouvez pas de point de vente près de chez vous ?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Faites-nous savoir où vous aimeriez trouver nos produits ! 
              Nous travaillons constamment à l'expansion de notre réseau de distribution.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              <span>Suggérer un point de vente</span>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OuNousTrouver;