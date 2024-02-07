import { FontSize, LinkVariant } from './index.ts';

export interface TextStyle {
  content: string;
  'font-size': FontSize;
  color: string;
  font: string;
  'font-style': string;
}

export interface LinkButton {
  content: string;
  'font-size': FontSize;
  url?: string;
  variant?: LinkVariant;
  font: string;
  'font-style': string;
  icon?: string;
  iconPosition?: string;
}

export interface Card {
  id: number;
  title: string;
  price?: string;
  rating?: number;
  imageURL?: string;
  desc?: string;
}

export interface Expires {
  show: boolean;
  date: string;
  time: string;
}

export interface Section {
  type: string;
  bgColor: string;
  title: TextStyle;
  subtitle: TextStyle;
  linkButton?: LinkButton;
  cards?: Card[];
  imageURL?: string;
  expires?: Expires;
}

export interface HeroSection extends Omit<Section, 'cards' | 'expires'> {
  heroImage: {
    imageURL: string;
    width: number;
    height: number;
  };
}

export interface Data {
  heroSection: HeroSection;
  bestSellingSection: Section;
  featuredProductsSection: Section;
  callSection: Section;
  designerClothesSection: Section;
}
