import prod from 'shared/assets/images/image1.png'
import health from 'shared/assets/images/image2.png'
import leanFire from 'shared/assets/images/image3.png'
import sport from 'shared/assets/images/image4.png'
import { TagesColor } from 'shared/ui/Tages/Tages'
import { ProductCard } from './types/MainComponents'

export const data: ProductCard[] = [
  { id: 1, 
    img: prod, 
    discraption: "Витаминно-минеральная добавка для глаз PreserVision AREDS 2 ...", 
    tag: "новинка", 
    oldPrice: "3269 ₴", 
    newPrice: "2 459 ₴", 
    tagType: TagesColor.NEW 
  },
  { id: 2, 
    img: health, 
    discraption: "Dr. Tobias Colon 14-дневное очищение, поддерживает здоровый кишечник...", 
    tag: "Акция", 
    oldPrice: "2458 ₴", 
    newPrice: "1 849 ₴",
    tagType: TagesColor.PROMOTION 
  },
  { id: 3, 
    img: leanFire, 
    discraption: "Optimum Nutrition Gold Standard 100% порошок сывороточного протеина...", 
    tag: "доставка из Сша", 
    oldPrice: "3269 ₴", 
    newPrice: "2 459 ₴",  
    tagType: TagesColor.DELIVERY
  },
  { id: 4, 
    img: sport, 
    discraption: "LeanFire с технологией SLIMVA NCE Advanced Energy нового поколения...", 
    oldPrice: "3269 ₴", 
    newPrice: "2 459 ₴",  
  }
] 
