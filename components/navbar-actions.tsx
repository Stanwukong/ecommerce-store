"use client"

import Button from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";

const NavbarActions = () => {

	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;


	return ( 
		<div className="ml-auto flex items-center gap-x-4">
			<Button
				className="flex items-center rounded-full px-4 py-2"
			>
				<ShoppingBag 
					size={20}
					color="white"
				/>
				<span className="ml-2 text-sm font-medium">
					0
				</span>
			</Button>
		</div>
	 );
}
 
export default NavbarActions;