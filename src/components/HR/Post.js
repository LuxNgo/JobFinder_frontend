import { Container, Pagination } from "react-bootstrap";
import { useState } from "react";
import Free from "./Free";

function Post (){
    const [activePage, setActivePage] = useState(1);

    const handlePageChange = (page) => {
        setActivePage(page);
    };
    return(
        <Container>
            <Pagination className="pag">
                <Pagination.Item className="pag_item" onClick={() => handlePageChange(1)} active={activePage === 1}>
                Đăng tin miễn phí
                </Pagination.Item>
                <Pagination.Item className="pag_item" onClick={() => handlePageChange(2)} active={activePage === 2}>
                Tư vấn tuyển dụng
                </Pagination.Item>
            </Pagination>

            <div>
                
                <div>
                {activePage === 1 ? (
                    <Free/>
                ) : (
                    <div>
                    {/* Nội dung cho trang Tư vấn tuyển dụng */}
                    <p>Thông tin tư vấn tuyển dụng...</p>
                    </div>
                )}
                </div>
            </div>
        </Container>
    );
};

export default Post;
