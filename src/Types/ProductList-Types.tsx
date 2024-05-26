interface ProductType {
  img: string;
  url: string;
  title: string;
  tags: string[] | [];
}

export interface ProductListProps {
  products: ProductType[];
  title: string;
}
