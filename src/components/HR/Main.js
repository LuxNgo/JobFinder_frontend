import Post from "./Post";
import '../../assets/style/HR/Main.css';
function Main(){
    return(
        <section>
            <div  style={{margin: '70px 0px'}}>
                <h1 className="d-flex justify-content-center" style={{fontWeight:'bold'}}>Đăng tin ngay</h1>
                <p className="d-flex  justify-content-center">Giúp nhà tuyển dụng biết được chính xác số lượng CV ứng viên qua từng vòng từ vòng nhận CV đến đi làm.</p>
            </div>
            <Post />
        </section>
    );
}

export default Main;