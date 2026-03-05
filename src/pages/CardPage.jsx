import { useParams } from "react-router";
import { Col, Row } from "../components/Flex";
import { useEffect, useState } from "react";
import { Card } from "../firebase/firebase";
import VariantTag from "../components/VariantTag";

export default function CardPage() {
	const { id } = useParams();

	const [data, setData] = useState({});

	useEffect(() => {
		const card = new Card(id);

		card.get().then((d) => {
			setData(d);
		});
	}, [id]);
	return (
		<>
			<Row gap={8} className="card">
				<img src="https://placehold.co/250x350" className="shadow-2xl/50 shadow-black" />
				<Col gap={4}>
					<h1>#{data.number} | {data.name}</h1>

					<h2>Variants</h2>

					<Row className="variants" gap={4}>
						{Object.keys(data.variants || {}).map((key) => {

							if (data.variants[key] == true) {
								console.log(key)
								return <VariantTag tagId={key} />
							}
						})}</Row>
				</Col>
			</Row>
		</>
	);
}
