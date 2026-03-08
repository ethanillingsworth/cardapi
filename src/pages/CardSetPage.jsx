import { Col, Row } from "../components/Flex";


export default function CardSetPage({ children, heading, tags = null }) {
    return (
        <>

            <Row gap={8} className="cardPage">
                <a href={`/`} target="_blank">
                    <img src="https://placehold.co/250x350" className="card large" />
                </a>
                <Col gap={4}>
                    <Row gap={4}>
                        <h1>{heading}</h1>
                        {Object.keys(tags || {}).map((key) => {

                            if (tags[key]) {
                                console.log(key)
                                return <VariantTag tagId={key} value={tags[key]} />
                            }
                        })}
                    </Row>
                    {children}
                </Col>
            </Row>
        </>

    );
}