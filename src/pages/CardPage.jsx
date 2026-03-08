import { useParams } from "react-router";
import { Col, Row } from "../components/Flex";
import { useEffect, useState } from "react";
import { Card, Set } from "../firebase/firebase";
import CardSetPage from "./CardSetPage";

export default function CardPage() {
	const { id } = useParams();

	const [data, setData] = useState({});

	const [sData, setSData] = useState({})

	useEffect(() => {
		const card = new Card(id);

		card.get().then((d) => {
			setData(d);

			const set = new Set(d.set)

			set.get().then((d2) => {
				setSData(d2)
			})
		});
	}, [id]);

	return (
		<CardSetPage heading={`#${data.number} | ${data.name}`} tags={data.tags}>

			<Row gap={4}>
				<button>Add to Collection</button>
			</Row>

			<h2>Players</h2>
			<Row gap={4}>
				<img src="https://placehold.co/250x350" className="card" />

			</Row>

			<h2>Set | {sData.name} ({sData.year})</h2>
			<h3>Total Cards: {sData.totalCards}</h3>
			<a href={`/set/${data.set}`}>
				<button>View Set</button>
			</a>
		</CardSetPage>
	);
}
