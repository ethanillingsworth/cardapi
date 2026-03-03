import { useParams } from "react-router";
import { Col, Row } from "../components/Flex";

export default function CardPage() {
	const { id } = useParams();
	return (
		<>
			<Row>
				<img />
				<Col>
					<h1>{id}</h1>
				</Col>
			</Row>
		</>
	);
}
