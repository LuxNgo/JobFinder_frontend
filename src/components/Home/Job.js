import React from "react";
import { ListGroup, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../../assets/style/Home/job.css';

function Job({currentJobs}){
    return(
        <>
            <h2>Việc làm mới nhất</h2>
          {currentJobs.length > 0 ? (
            <ListGroup className=" d-flex justify-content-center align-items-center">
              {currentJobs.map(job => (
                <Card as={Link} to={`/job/${job.id}`}  key={job.id} className="mb-4 me-auto job-card">
                  <Card.Body>                
                    <Row className=" align-items-center">
                      <Col className="text-center" md={5}>                       
                        <Row>
                          <Col md={3}>
                            <img 
                            src={job.logoUrl}  // URL của logo công ty
                            alt={`${job.title} logo`}
                            style={{ width: '50px', height: '50px', marginRight: '15px' }}
                          />
                          </Col>
                          <Col className="d-flex align-items-center justify-content-center col-auto"><h4 >{job.title}</h4></Col>               
                        </Row>
                      </Col>

                      {/* Địa điểm */}
                      <Col className="text-center ">
                        <strong>Địa điểm</strong>
                        <div>{job.location}</div>
                      </Col>

                      {/* Ngành nghề */}
                      <Col className="text-center ">
                        <strong>Ngành nghề</strong>
                        <div>{job.industry}</div>
                      </Col>

                      {/* Kinh nghiệm */}
                      <Col className="text-center ">
                        <strong>Kinh nghiệm</strong>
                        <div>{job.experience}</div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              ))}
            </ListGroup>
          ) : (
            <p>Không tìm thấy công việc phù hợp.</p>
          )}
        </>
    );
};

export default Job;