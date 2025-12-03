export interface MenuItem {
  name: string;
  description: string;
  price: string;
  veg?: boolean;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export interface GalleryItem {
  id: number;
  src: string;
  caption: string;
}