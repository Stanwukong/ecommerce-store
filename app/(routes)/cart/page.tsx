"use client"

import Container from "@/components/ui/container";
import useCart from "@/hooks/use-cart";
import { useEffect, useState } from "react";
import CartItem from "./components/cart-item";
import Summary from "./components/summary";

const CartPage = () => {

	const cart = useCart();

	const [mounted, setMounted] = useState(false);

	useEffect(() => {
	  setMounted(false);
	}, [])
	

	return ( 
		<div className="bg-white">
			<Container>
				<div className="px-4 py-16 sm:px-6 lgpx-8">
					<h1 className="text-3xl font-bold text-black">
						Shopping Cart
					</h1>
					<div className="mt-12 lg:grid-cols-12 lg:items-start gap-x-12">
						<div className="cols-span-7">
							{cart.items.length === 0 && <p className="text-neutral-500">No items in cart</p>}
							<ul>
								{
									cart.items.map((item) => (
										<CartItem key={item.id} data={item}/>
									))
								}
							</ul>
						</div>
						<Summary />
					</div>
				</div>
			</Container>
		</div>
	 );
}
 
export default CartPage;