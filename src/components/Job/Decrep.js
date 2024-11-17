import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation, faLevelUp, faIndustry, faTimesCircle, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import '../../assets/style/Job/Job.css';

function Decrep({job}){
 
    return(
        <>
            <Card key={job.id} className="me-auto">
                <Card.Body className="">
                    <div>
                        <img className="d-block mx-auto" src={job.logo} alt={job.companyName} style={{width:'50px', height:'50px'}} />
                        <h3 className="d-flex justify-content-center mt-5 mb-5">{job.title}</h3>
                    </div>

                    <Container className="" style={{width:'90%'}}>
                        <Row className="d-flex justify-content-between">
                        {/* p: padding mx-margin left+ right */}
                            <Col className="p-0 col-auto"> 
                                <div className="d-flex justify-content-center">
                                    {/* w-auto: width auto */}
                                    <Row className="w-auto m-0">
                                        <Col className="col-1"><FontAwesomeIcon icon={faLocation} /></Col>
                                        <Col>Địa điểm</Col>
                                    </Row>
                                </div>
                                <h5 className="d-flex justify-content-center mt-2">{job.location}</h5>
                            </Col>

                            <Col className="col-auto p-0">
                                <div className="d-flex justify-content-center" style={{height:'24px'}}>
                                    <Row className="w-auto m-0" >
                                        <Col className="col-1" ><FontAwesomeIcon icon={faLevelUp} /></Col>
                                        <Col>Cấp bậc</Col>
                                    </Row>
                                </div>
                                <h5 className="d-flex justify-content-center mt-2">{job.level}</h5>
                            </Col>

                            <Col className="col-auto p-0">
                                <div className="d-flex justify-content-center">
                                    <Row className="w-auto m-0">
                                        <Col className="col-1"><FontAwesomeIcon icon={faIndustry} /></Col>
                                        <Col>Ngành nghề</Col>
                                    </Row>
                                </div>
                                <h5 className="d-flex justify-content-center mt-2">{job.industry}</h5>
                            </Col>

                            <Col className="col-auto p-0">
                                <div className="d-flex justify-content-center">
                                <Row className="w-auto m-0">
                                    <Col className="col-1"><FontAwesomeIcon icon={faTimesCircle} /></Col>
                                    <Col>Hình thức</Col>
                                </Row>
                                </div>
                                <h5 className="d-flex justify-content-center mt-2">{job.type}</h5>
                            </Col>

                            <Col className="col-auto p-0">
                                <div className="d-flex justify-content-center">
                                    <Row className="w-auto m-0">
                                        <Col className="col-1"><FontAwesomeIcon icon={faMoneyBill} /></Col>
                                        <Col>Lương</Col>
                                    </Row>
                                </div>
                                <h5 className="d-flex justify-content-center mt-2">{job.salary}</h5>
                            </Col>
                        </Row>

                        <hr className="mt-5 mb-5"/>

                        <div className="mb-5" style={{width:'100%'}}>
                            <h3>Job Decreption</h3>
                            <p>{job.jobDescription}</p>
                        </div>

                        <div className="mb-5">
                            <h3>Responsibilities</h3>
                            <p>{job.responsibilities}</p>
                        </div>

                        <div className="mb-5">
                            <h3>Job Requirements</h3>
                            <p>{job.jobRequirements}</p>
                        </div>

                        <Button as="input" type="submit" value="Apply now" style={{width:'150px', height:'50px', borderRadius:'25px'}} />
                    </Container>

                </Card.Body>
            </Card>


            {/* more job */}
            <Card>
                
            </Card>
        </>
        
    );
};

export default Decrep;