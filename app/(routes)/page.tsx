import getBillboard from "@/actions/get-billboard"
import getProducts from "@/actions/get-products"
import Billboard from "@/components/billboard"
import ProductList from "@/components/product-list"
import Container from "@/components/ui/container"

export const revalidate = 0

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true })
  const billBoard = await getBillboard("7aa0c45d-19d9-48dd-aa7e-a52b4bb007a2")
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billBoard} />

        <div className="flex flex-col gap-y-8 px-4 sm:px-4 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
}

export default HomePage
