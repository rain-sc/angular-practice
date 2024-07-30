export interface ProductListType {
  id: number
  category: string
  description: string
  image: string
  price: number
  title: string
  rating: RatingType
}

export interface RatingType {
  rate: number
  count: number
}