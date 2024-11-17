import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import '../../assets/style/Home/post.css';

function Post({companies}){
    return(
        <>
            <Card className="custom-card">
                <div className="mx-auto mt-3 mb-3" style={{width:'70%', padding:'10px 0px'}}>
                    <div>
                        <FontAwesomeIcon icon={faBriefcase} style={{ fontSize: '40px', color: '#007bff' }} />
                    </div>
                    <div>
                        <h4>Đăng tuyển dụng ngay hôm nay</h4>
                        <p>Bạn có thể dễ dàng tìm thấy cơ hội việc làm từ những tập đoàn quốc tế, công ty vừa và nhỏ.</p>
                        <Button as={Link} to="/post" variant="primary" size="lg">
                            Đăng tin ngay
                        </Button>
                    </div>
                </div>
            </Card>

            <Card className="custom-card">
                <div className="mx-auto mt-3 mb-3" style={{width:'70%', padding:'10px 0px'}}>
                    <h4>Công ty nổi bật</h4>
                    {companies.map(com => (
                        
                            <Row>
                                <Col className='col-3'><img src={com.logo} alt={`logo`}/></Col>
                                <Col className='col-7'><h4>{com.name}</h4></Col>
                                <Col className='col-2 ms-auto'><FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '10px' }} /></Col>
                            </Row>
            
                    ))}
                </div>
            </Card>
        </>
    );
};

export default Post;