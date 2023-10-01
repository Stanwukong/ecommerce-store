"use client"

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NavbarActions = () => {

	const router = useRouter();
	const [mounted, setMounted] = useState(false);

	const cart = useCart();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;


	return ( 
		<div className="ml-auto flex items-center gap-x-4">
			<Button
				className="flex items-center rounded-full px-4 py-2"
				onClick={() => router.push("/cart")}
			>
				<ShoppingBag 
					size={20}
					color="white"
				/>
				<span className="ml-2 text-sm font-medium">
					{cart.items.length}
				</span>
			</Button>
		</div>
	 );
}
 
export default NavbarActions;