import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import worldMap from '../../assets/img/world-dotted-map.png';
import heroImg from '../../assets/img/hero-img.svg';
import JobPost from './JobPost';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../../assets/style/Home/main.css';
import WebFont from 'webfontloader';


const Main = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Droid Sans', 'Roboto', 'Chilanka'] // Đảm bảo tất cả tên font đều được đặt trong dấu nháy
      }
    });
  }, []);

  return (
    <main className="main">
      {/* Hero Section */}
      <section id="hero" className="hero section dark-background">
        <img
            src={worldMap}
          onScroll=""
          alt=""
          className="hero-bg"
          data-aos="fade-in"
        />

        <div className="container">
          <div className="row gy-4 d-flex justify-content-between">

            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h2 data-aos="fade-up">Tìm việc làm nhanh 24h</h2>
              <p data-aos="fade-up" data-aos-delay="100">
                Tiếp cận hơn 40,000 tin tuyển dụng việc làm mới mỗi ngày từ hàng nghìn doanh nghiệp lớn, uy tín và đa dạng tại Việt Nam. Bạn có thể dễ dàng tìm thấy cơ hội việc làm từ những tập đoàn, công ty vừa và nhỏ, cho đến các doanh nghiệp khởi nghiệp năng động trên khắp cả nước.
              </p>

              <form
                action="#"
                className="form-search d-flex align-items-center mb-0 position-relative"
                data-aos="fade-up"
                data-aos-delay="200"               
                onFocus={(e) => (e.target.style.borderColor = '#0056b3')}
                onBlur={(e) => (e.target.style.borderColor = '#007bff')}
              >
                <span className="search-icon" style={{marginLeft:'15px'}}>
                  <FontAwesomeIcon icon={faSearch} style={{ color: '#007bff' }} />
                </span>
                <input
                  type="text"
                  className="form-control rounded-pill border pl-5"
                  placeholder="Tìm kiếm công việc..."
                  
                />
                <button type="submit" className="search btn btn-primary rounded-pill mx-2" style={{padding:'15px 25px'}}>
                  Search
                </button>
              </form>
            </div>

            

            <div className="col-lg-5 order-1 order-lg-2 hero-img" data-aos="zoom-out">
                <img src={heroImg} className="img-fluid mb-3 mb-lg-0" alt="Hero" />
            </div>

          </div>
        </div>
      </section>

      {/* job */}
      <section className="job">
        <JobPost/>
      </section>
    </main>
  );
};

export default Main;
