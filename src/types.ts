export interface PhotoCategory {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export interface PortfolioItem {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
}