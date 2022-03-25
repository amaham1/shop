import { Card, CardGroup, Row } from "react-bootstrap";
import logo2 from '../logo.svg';
import logo3 from '../366x160.png';
import { useNavigate } from "react-router-dom";

function Main() {
    const history = useNavigate();

    return (
        <div>
            <Row xs={1} md={2} className="g-4">
                <Card className="col-md-4" border="warning" style={{ width: '18rem', margin : "1rem"}} onClick={ ()=>{history("/detail")}}>
                    <Card.Img variant="top" src={logo3} />
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                    <Card.Title>Warning Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card className="col-md-4" border="warning" style={{ width: '18rem', margin : "1rem"}} onClick={ ()=>{history("/detail")}}>
                    <Card.Img variant="top" src={logo3} />
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                    <Card.Title>Warning Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card className="col-md-4" border="warning" style={{ width: '18rem', margin : "1rem"}} onClick={ ()=>{history("/detail")}}>
                    <Card.Img variant="top" src={logo3} />
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                    <Card.Title>Warning Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card border="warning" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={logo3} />
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                    <Card.Title>Warning Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card border="warning" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={logo3} />
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                    <Card.Title>Warning Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </Row>
        </div>
    )
}

export default Main;