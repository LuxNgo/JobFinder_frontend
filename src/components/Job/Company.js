import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser, faCube, faLocation} from "@fortawesome/free-solid-svg-icons";
import { Card, Row, Col, Container} from "react-bootstrap";
import { Link } from 'react-router-dom';

function Company({logo, name, number_of_employees, field, location}){
    return(
        <Card>
            <Container className="m-4" style={{width:'90%'}}>
                <Row className="mb-3">
                    <Col className="col-4"><img src={logo} alt={name} style={{width:'50px', height:'50px'}}/></Col>
                    <Col >{name}</Col>
                </Row>

                <Row className="mb-3">
                    <Col className="col-4">
                        <Row>
                            <Col className="col-1"><FontAwesomeIcon icon={faUser}/></Col>
                            <Col>Quy mô:</Col>
                        </Row>
                    </Col>
                    <Col >{number_of_employees}</Col>
                </Row>

                <Row className="mb-3">
                    <Col className="col-4">
                        <Row>
                            <Col className="col-1"><FontAwesomeIcon icon={faCube}/></Col>
                            <Col>Lĩnh vực:</Col>
                        </Row >
                    </Col>
                    <Col >{field}</Col>
                </Row>

                <Row className="mb-3">
                    <Col className="col-4">
                        <Row>
                            <Col className="col-1"><FontAwesomeIcon icon={faLocation}/></Col>
                            <Col>Địa điểm:</Col>
                        </Row>
                    </Col>
                    <Col >{location}</Col>
                </Row>

                <Row>
                    <Link to="" className="d-flex justify-content-center" style={{fontWeight:'bold'}}>Xem trang công ty</Link>
                </Row>
            </Container>
        </Card>

       
    );
};

export default Company;