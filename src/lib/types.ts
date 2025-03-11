
export interface Product {
  id: number;
  name: string;
  slug: string;
  image: string;
  category: string;
  sizes: string[];
  prices: number[];
  weight: string[];
  description: string;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  image: string;
  excerpt: string;
  content: string;
  date: string;
}

export interface Partner {
  id: number;
  name: string;
  logo: string;
}

export interface FeatureItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}
