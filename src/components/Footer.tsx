import { MapPin, Phone, Mail } from "lucide-react";
import logoGauche from "@/assets/logo-gauche.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo et description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={logoGauche} 
                alt="Le Sportif Gourmand" 
                className="h-10 w-10"
              />
              <h3 className="text-xl font-bold">Le Sportif Gourmand</h3>
            </div>
            <p className="text-secondary-foreground/80 mb-6 leading-relaxed">
              Révolutionnons la pâtisserie avec des créations gourmandes et protéinées, 
              parfaites pour allier plaisir et performance sportive.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/lesportifgourmand" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/60 hover:text-primary transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986s11.987-5.368 11.987-11.986C24.004 5.367 18.635.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/company/lesportifgourmand" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/60 hover:text-primary transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="/produits" className="text-secondary-foreground/80 hover:text-primary transition-colors">Produits</a></li>
              <li><a href="/partenaires" className="text-secondary-foreground/80 hover:text-primary transition-colors">Partenaires</a></li>
              <li><a href="/histoire" className="text-secondary-foreground/80 hover:text-primary transition-colors">Histoire</a></li>
              <li><a href="/ou-nous-trouver" className="text-secondary-foreground/80 hover:text-primary transition-colors">Où nous trouver</a></li>
              <li><a href="/contact" className="text-secondary-foreground/80 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-secondary-foreground/80 text-sm">
                  123 Rue de la Pâtisserie<br />
                  75001 Paris, France
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-secondary-foreground/80 text-sm">
                  +33 1 23 45 67 89
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-secondary-foreground/80 text-sm">
                  contact@lesportifgourmand.fr
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-secondary-foreground/60 text-sm">
            © 2024 Le Sportif Gourmand. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;