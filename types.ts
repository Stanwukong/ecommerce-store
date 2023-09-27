export interface Billboard {
  id: number
  name: string
  imageUrl: string
}

export interface Category {
  id: string
  name: string
  billboards: Billboard
}
