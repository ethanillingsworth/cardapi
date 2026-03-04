import { useParams } from "react-router";
import { Col, Row } from "../components/Flex";
import { useEffect, useState } from "react";
import { Card } from "../firebase/firebase";

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
			<Row>
				<img />
				<Col>
					<h1>{data.name}</h1>
				</Col>
			</Row>
		</>
	);
}
