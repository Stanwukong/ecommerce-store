export interface Billboard {
  id: number
  label: string
  imageUrl: string
}

export interface Category {
  id: string
  name: string
  billboards: Billboard
}
