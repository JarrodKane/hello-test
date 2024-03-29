import { FontSize, LinkVariant } from './index.ts';

export interface TextStyle {
  content: string;
  'font-size': FontSize;
  color: string;
  font: string;
  'font-style': string;
}

export type ImageDetails = {
  imageURL: string;
  width: number;
  height: number;
};

export interface LinkButton {
  content: string;
  'font-size': FontSize;
  url: string;
  variant?: LinkVariant;
  font: string;
  'font-style': string;
  icon?: string;
  iconPosition?: string;
}

export interface Card {
  id: number;
  title: TextStyle;
  img: ImageDetails;
  price?: string;
  rating?: number;
  desc?: string;
}

export interface Expires {
  show: boolean;
  date: string;
  time: string;
}

export interface Section {
  type: string;
  cols: number;
  bgColor: string;
  title: TextStyle;
  subtitle: TextStyle;
  linkButton?: LinkButton;
  cards?: Card[];
  img?: ImageDetails;
  expires?: Expires;
}

export interface HeroSection extends Omit<Section, 'cards' | 'expires' | 'cols' | 'img'> {
  heroImage: ImageDetails;
}

export type SectionType = HeroSection | Section;

export interface Data {
  heroSection: HeroSection;
  bestSellingSection: Section;
  featuredProductsSection: Section;
  callSection: Section;
  designerClothesSection: Section;
}
