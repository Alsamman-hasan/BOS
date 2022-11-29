import { TagesColor } from 'shared/ui/Tages/Tages';

export interface SliderItems {
  id: number;
  Img: string;
  title: string;
  description: string;
}

export interface ProductCard {
  id: number;
  img: string;
  discraption: string;
  tag?: string |undefined;
  oldPrice: string;
  newPrice: string;
  tagType?: TagesColor ;
}
