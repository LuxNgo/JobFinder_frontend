import { Card, Row, Col } from "react-bootstrap";
import '../../assets/style/Company/Company.css';

function Company({coms}){
    return(
        <>
            <Row className="com-row mx-auto">
                {coms.map((com) => (
                    <Col md={6} key={com.id} className="mb-4 com-col ">
                        <Card className="com-card align-items-center xs-auto">
                            <Card.Body xs="auto" style={{width:'80%'}} className="d-flex align-items-center">
                                <Row>
                                    <Col xs="auto">
                                        <img 
                                            src={com.logo}  // URL của logo công ty
                                            alt={`${com.name} logo`}
                                            style={{ width: '50px', height: '50px', marginRight: '15px' }}
                                        />
                                    </Col>

                                    <Col>
                                        <h5>{com.name}</h5>
                                        <p>{com.industry}</p>
                                        <a href="">Xem chi tiết</a>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

        </>
    );
};
export default Company;