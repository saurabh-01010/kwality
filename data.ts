import { MenuCategory, GalleryItem } from './types';

export const menuData: MenuCategory[] = [
  {
    title: "Signature Starters",
    items: [
      { name: "Kakori Kebab", description: "Melt-in-mouth lamb kebabs seasoned with aromatic spices.", price: "₹ 895" },
      { name: "Paneer Tikka Shashlik", description: "Cottage cheese marinated in yellow chilli and yogurt.", price: "₹ 645", veg: true },
      { name: "Kwality Galouti", description: "Our house special finely minced mutton patties.", price: "₹ 875" },
      { name: "Dahi Ke Kebab", description: "Velvety hung curd patties, spiced and pan-fried.", price: "₹ 595", veg: true }
    ]
  },
  {
    title: "Non-Veg Main Course",
    items: [
      { name: "Murgh Makhani (Butter Chicken)", description: "The legendary original recipe from 1940.", price: "₹ 925" },
      { name: "Roganjosh Kashmiri", description: "Tender lamb cooked in Kashmiri spices and ratan jot.", price: "₹ 975" },
      { name: "Chicken Bharta", description: "Shredded chicken tossed with egg and spices.", price: "₹ 845" }
    ]
  },
  {
    title: "Veg Main Course",
    items: [
      { name: "Kwality Chana Bhatura", description: "Our iconic large bhatura served with pindi chana.", price: "₹ 625", veg: true },
      { name: "Paneer Lababdar", description: "Cottage cheese cubes in a rich tomato-onion gravy.", price: "₹ 745", veg: true },
      { name: "Dal Makhani", description: "Black lentils simmered overnight with cream and butter.", price: "₹ 675", veg: true }
    ]
  },
  {
    title: "Breads & Rice",
    items: [
      { name: "Garlic Naan", description: "Leavened bread topped with chopped garlic.", price: "₹ 145", veg: true },
      { name: "Pudina Paratha", description: "Whole wheat layered bread with mint.", price: "₹ 135", veg: true },
      { name: "Mutton Biryani", description: "Basmati rice dum cooked with marinated lamb.", price: "₹ 995" },
      { name: "Subz Biryani", description: "Seasonal vegetables dum cooked with saffron rice.", price: "₹ 725", veg: true }
    ]
  },
  {
    title: "Desserts",
    items: [
      { name: "Tutti Frutti Ice Cream", description: "Classic homemade fruit ice cream.", price: "₹ 345", veg: true },
      { name: "Gulab Jamun", description: "Golden fried milk solids soaked in saffron syrup.", price: "₹ 295", veg: true },
      { name: "Rasmalai", description: "Spongy cottage cheese dumplings in saffron milk.", price: "₹ 325", veg: true }
    ]
  }
];

export const galleryItems: GalleryItem[] = [
  { id: 1, src: "https://picsum.photos/seed/kwality1/800/600", caption: "Since 1940 – A CP Icon" },
  { id: 2, src: "https://picsum.photos/seed/kwality2/800/600", caption: "Royal Ambience" },
  { id: 3, src: "https://picsum.photos/seed/kwality3/800/600", caption: "Signature Cocktails" },
  { id: 4, src: "https://picsum.photos/seed/kwality4/800/600", caption: "Fine Dining Settings" },
  { id: 5, src: "https://picsum.photos/seed/kwality5/800/600", caption: "Authentic North Indian" },
  { id: 6, src: "https://picsum.photos/seed/kwality6/800/600", caption: "Heritage Interiors" },
  { id: 7, src: "https://picsum.photos/seed/kwality7/800/600", caption: "Family Gatherings" },
  { id: 8, src: "https://picsum.photos/seed/kwality8/800/600", caption: "Classic Cutlery" },
  { id: 9, src: "https://picsum.photos/seed/kwality9/800/600", caption: "Mughlai Delicacies" },
  { id: 10, src: "https://picsum.photos/seed/kwality10/800/600", caption: "Evening Vibes" },
  { id: 11, src: "https://picsum.photos/seed/kwality11/800/600", caption: "Iconic Chana Bhatura" },
  { id: 12, src: "https://picsum.photos/seed/kwality12/800/600", caption: "Sweet Endings" },
];