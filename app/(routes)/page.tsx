import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
	const billBoard = await getBillboard('7aa0c45d-19d9-48dd-aa7e-a52b4bb007a2');
	return ( 
		<Container>
			<div className="space-y-10 pb-10">
				<Billboard data={billBoard} />
			</div>
		</Container>
	 );
}
 
export default HomePage;