export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  bannerImage?: string;
  nutritionalInfo: {
    calories: number;
    proteins: number;
    noControversialAdditives: boolean;
    madeInFrance: boolean;
  };
  detailedNutrition: {
    per100g: {
      energy: string;
      proteins: string;
      carbs: string;
      sugars: string;
      fat: string;
      saturatedFat: string;
      fiber: string;
      salt: string;
    };
  };
  ingredients: string[];
  conservation: {
    temperature: string;
    duration: string;
    packaging: string;
    format: string;
  };
  usage: string[];
}

export const products: Product[] = [
  {
    id: "flan-proteine",
    name: "Flan Pâtissier Protéiné",
    tagline: "Le Flan Pâtissier Protéiné",
    description: "La première pâtisserie qui allie plaisir gourmand et performance sportive.",
    image: "/src/assets/flan-product.png",
    bannerImage: "/src/assets/banniere-flan.png",
    nutritionalInfo: {
      calories: 250,
      proteins: 20,
      noControversialAdditives: true,
      madeInFrance: true,
    },
    detailedNutrition: {
      per100g: {
        energy: "200 kcal",
        proteins: "16g",
        carbs: "22g",
        sugars: "18g",
        fat: "4g",
        saturatedFat: "2g",
        fiber: "1g",
        salt: "0.2g",
      },
    },
    ingredients: [
      "Lait de vache français",
      "Œufs fermiers",
      "Protéines de lactosérum",
      "Sucre de canne",
      "Vanille naturelle",
      "Caramel artisanal",
    ],
    conservation: {
      temperature: "Entre 2°C et 4°C",
      duration: "7 jours après ouverture",
      packaging: "Pot individuel recyclable",
      format: "125g par portion",
    },
    usage: [
      "Collation post-entraînement",
      "Petit-déjeuner protéiné",
      "Dessert healthy",
      "En-cas gourmand",
    ],
  },
];

export const getFeaturedProduct = () => products[0];
