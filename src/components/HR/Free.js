import { useState} from "react";
import { Row, Col, Form, Button, CardBody, Card } from "react-bootstrap";
import '../../assets/style/HR/post.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCircleInfo, faBuilding } from '@fortawesome/free-solid-svg-icons';


function Free(){
    // State cho thông tin người đăng tuyển
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    
    // State cho thông tin công việc
    const [jobTitle, setJobTitle] = useState('');
    const [jobIndustry, setJobIndustry] = useState('');
    const [jobLocation, setJobLocation] = useState('');
    const [salary, setSalary] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    
    // State cho thông tin công ty
    const [companyName, setCompanyName] = useState('');
    const [companyWebsite, setCompanyWebsite] = useState('');
    const [companyIndustry, setCompanyIndustry] = useState('');
    const [facebookPage, setFacebookPage] = useState('');
    const [logo, setLogo] = useState('');
    const [cover, setCover] = useState('');
    const [companyDescription, setCompanyDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Xử lý logic gửi dữ liệu
        console.log({
        fullName,
        email,
        jobTitle,
        jobIndustry,
        jobLocation,
        salary,
        jobDescription,
        companyName,
        companyWebsite,
        companyIndustry,
        facebookPage,
        logo,
        cover,
        companyDescription,
        });
    };

    return(
        <div className="d-flex" style={{marginTop:'100px'}}>
            <div className="container me-auto" style={{width:'80%'}}>
                <div className="title">
                    <FontAwesomeIcon icon={faUser} className="icon" />
                    <h4>1. Thông tin người đăng tuyển</h4>
                    <p>Thông tin của người liên hệ gồm tên và email để nhà tuyển dụng có thể dễ dàng kết nối.</p>
                </div>

                <div className="title">
                    <FontAwesomeIcon icon={faCircleInfo} className="icon" />
                    <h4>2. Thông tin công việc</h4>
                    <p>Chi tiết công việc như chức danh, ngành nghề, địa điểm, lương và mô tả cụ thể về yêu cầu công việc.</p>
                </div>

                <div className="title" style={{marginTop:'350px'}}>
                    <FontAwesomeIcon icon={faBuilding} className="icon" />
                    <h4>3. Thông tin công ty</h4>
                    <p>Các thông tin cơ bản về công ty bao gồm tên, website, ngành nghề, và liên kết mạng xã hội của công ty.</p>
                </div>
       
            </div>

            <Card  className="card-infor ms-auto" style={{padding:'10px 30px'}}>
                <CardBody>
                    <Form onSubmit={handleSubmit} className="mt-4">
                    {/* Phần thông tin người đăng tuyển */}
                    <Row className="mb-3">
                    <Col md={6}>
                        <Form.Group controlId="formFullName">
                        <Form.Label className="label">Họ và tên</Form.Label>
                        <Form.Control
                            className="input rounded-pill border"
                            type="text"
                            placeholder="Nhập họ và tên"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                        />
                        </Form.Group>
                    </Col>
                    <Col md={6} >
                        <Form.Group controlId="formEmail">
                        <Form.Label className="label">Email</Form.Label>
                        <Form.Control
                            className="input rounded-pill border"
                            type="email"
                            placeholder="Nhập email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        </Form.Group>
                    </Col>

                    <div className="d-flex justify-content-center" style={{ margin: '40px 0px 20px 0px' }}>
                        <hr style={{ width: '95%' }} />
                    </div>
                    </Row>

                    {/* Phần thông tin công việc */}
                    <Row className="mb-3">
                    <Col md={12}>
                        <Form.Group controlId="formJobTitle">
                        <Form.Label className="label">Tiêu đề công việc</Form.Label>
                        <Form.Control
                            className="input rounded-pill border"
                            type="text"
                            placeholder="Nhập tiêu đề công việc"
                            value={jobTitle}
                            onChange={(e) => setJobTitle(e.target.value)}
                            required
                        />
                        </Form.Group>
                    </Col>
                
                    </Row>
                    
                    <Row className="mb-3">
            
                    <Col md={12} >
                        <Form.Group controlId="formJobIndustry">
                        <Form.Label className="label">Ngành nghề</Form.Label>
                        <Form.Control
                            className="input rounded-pill border"
                            type="text"
                            placeholder="Nhập ngành nghề"
                            value={jobIndustry}
                            onChange={(e) => setJobIndustry(e.target.value)}
                            required
                        />
                        </Form.Group>
                    </Col>
                    </Row>

                    <Row className="mb-3">
                    <Col md={6}>
                        <Form.Group controlId="formJobLocation">
                        <Form.Label className="label">Địa điểm làm việc</Form.Label>
                        <Form.Control
                            className="input rounded-pill border"
                            type="text"
                            placeholder="Nhập địa điểm"
                            value={jobLocation}
                            onChange={(e) => setJobLocation(e.target.value)}
                            required
                        />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="formSalary">
                        <Form.Label className="label">Mức lương</Form.Label>
                        <Form.Control
                            className="input rounded-pill border"
                            type="text"
                            placeholder="Nhập mức lương"
                            value={salary}
                            onChange={(e) => setSalary(e.target.value)}
                            required
                        />
                        </Form.Group>
                    </Col>
                    </Row>
                    <Row className="mb-3">
                    <Col md={12}>
                        <Form.Group controlId="formJobDescription">
                        <Form.Label className="label">Mô tả công việc</Form.Label>
                        <Form.Control
                        
                            as="textarea"
                            rows={5}
                            placeholder="Nhập mô tả công việc"
                            value={jobDescription}
                            onChange={(e) => setJobDescription(e.target.value)}
                            required
                        />
                        </Form.Group>
                    </Col>
                    </Row>

                    <div className="d-flex justify-content-center" style={{ margin: '40px 0px 20px 0px' }}>
                        <hr style={{ width: '95%' }} />
                    </div>

                    {/* Phần thông tin công ty */}
                    <Row className="mb-3">
                    <Col md={6} >
                        <Form.Group controlId="formCompanyName">
                        <Form.Label className="label">Tên công ty</Form.Label>
                        <Form.Control
                            className="input rounded-pill border"
                            type="text"
                            placeholder="Nhập tên công ty"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            required
                        />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="formCompanyWebsite">
                        <Form.Label className="label">Website</Form.Label>
                        <Form.Control
                            className="input rounded-pill border"
                            type="url"
                            placeholder="Nhập website công ty"
                            value={companyWebsite}
                            onChange={(e) => setCompanyWebsite(e.target.value)}
                        />
                        </Form.Group>
                    </Col>
                    </Row>
                    <Row className="mb-3">
                    <Col md={6}>
                        <Form.Group controlId="formCompanyIndustry">
                        <Form.Label className="label">Ngành nghề</Form.Label>
                        <Form.Control
                            className="input rounded-pill border"
                            type="text"
                            placeholder="Nhập ngành nghề công ty"
                            value={companyIndustry}
                            onChange={(e) => setCompanyIndustry(e.target.value)}
                        />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="formFacebookPage">
                        <Form.Label className="label">Facebook Page</Form.Label>
                        <Form.Control
                            className="input rounded-pill border"
                            type="url"
                            placeholder="Nhập link Facebook"
                            value={facebookPage}
                            onChange={(e) => setFacebookPage(e.target.value)}
                        />
                        </Form.Group>
                    </Col>
                    </Row>
                    <Row className="mb-3">
                    <Col md={6}>
                        <Form.Group controlId="formLogo">
                        <Form.Label className="label">Logo</Form.Label>
                        <Form.Control
                            className="input rounded-pill border"
                            type="text"
                            placeholder="Nhập URL logo công ty"
                            value={logo}
                            onChange={(e) => setLogo(e.target.value)}
                        />
                        </Form.Group>
                    </Col>
                    <Col md={6} >
                        <Form.Group controlId="formCover">
                        <Form.Label className="label">Hình ảnh bìa</Form.Label>
                        <Form.Control
                            className="input rounded-pill border"
                            type="text"
                            placeholder="Nhập URL hình ảnh bìa"
                            value={cover}
                            onChange={(e) => setCover(e.target.value)}
                        />
                        </Form.Group>
                    </Col>
                    </Row>
                    <Row className="mb-3">
                    <Col md={12}>
                        <Form.Group controlId="formCompanyDescription">
                        <Form.Label className="label">Mô tả công ty</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Nhập mô tả công ty"
                            value={companyDescription}
                            onChange={(e) => setCompanyDescription(e.target.value)}
                        />
                        </Form.Group>
                    </Col>
                    </Row>

                    <Button variant="primary" type="submit" className="w-100">
                    Đăng tin
                    </Button>
            </Form>
                </CardBody>
</Card>
        </div>
    );
};

export default Free;