import { Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const GoogleReviews = () => {
  // Mock data - in real implementation, you'd fetch from Google Reviews API
  const reviews = [
    {
      id: 1,
      author: "Marie D.",
      rating: 5,
      text: "Excellent flan protéiné ! Le goût est délicieux et la texture parfaite. Parfait après mes séances de sport.",
      date: "Il y a 2 semaines"
    },
    {
      id: 2,
      author: "Thomas L.",
      rating: 5,
      text: "Enfin une pâtisserie qui allie plaisir et nutrition ! Le Sportif Gourmand révolutionne ma collation post-entrainement.",
      date: "Il y a 1 mois"
    },
    {
      id: 3,
      author: "Sophie M.",
      rating: 5,
      text: "Une découverte incroyable ! 20g de protéines dans un dessert si savoureux, c'est juste parfait.",
      date: "Il y a 3 semaines"
    }
  ];

  const averageRating = 4.9;
  const totalReviews = 47;

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Avis de nos clients</h2>
          <div className="flex items-center justify-center space-x-2 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-6 w-6 ${
                    i < Math.floor(averageRating) 
                      ? "text-primary fill-current" 
                      : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <span className="text-2xl font-semibold">{averageRating}</span>
          </div>
          <p className="text-muted-foreground">Basé sur {totalReviews} avis Google</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < review.rating 
                            ? "text-primary fill-current" 
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-foreground mb-4 leading-relaxed">
                  "{review.text}"
                </p>
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span className="font-medium">{review.author}</span>
                  <span>{review.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://www.google.com/search?q=le+sportif+gourmand+avis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
          >
            <span>Voir tous les avis sur Google</span>
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;