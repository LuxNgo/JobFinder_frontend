import { useState, useEffect } from 'react';
import { Card, Pagination} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import FilterDropdown from './FilterDropdown';
import Job from './Job';
import Post from './Post';


function JobPost(){
    // filter job
  const locations = ['Hà Nội', 'TP Hồ Chí Minh', 'Đà Nẵng', 'Hải Phòng', 'Cần Thơ'];
  const industries = ['Công nghệ thông tin', 'Tài chính', 'Giáo dục', 'Sản xuất', 'Y tế'];
  const experiences = ['Dưới 1 năm', '1-3 năm', '3-5 năm', 'Trên 5 năm'];
  

  const jobData = [
    { id: 1, title: 'Kỹ sư phần mềm', location: 'Hà Nội', industry: 'Công nghệ thông tin', experience: '1-3 năm' },
    { id: 2, title: 'Nhân viên kế toán', location: 'TP Hồ Chí Minh', industry: 'Tài chính', experience: '3-5 năm' },
    { id: 3, title: 'Giáo viên tiếng Anh', location: 'Đà Nẵng', industry: 'Giáo dục', experience: 'Trên 5 năm' },
    { id: 4, title: 'Quản lý sản xuất', location: 'Hải Phòng', industry: 'Sản xuất', experience: '1-3 năm' },
    { id: 5, title: 'Bác sĩ', location: 'Cần Thơ', industry: 'Y tế', experience: 'Dưới 1 năm' },
  ];

  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [selectedExperience, setSelectedExperience] = useState('');
  const [jobs, setJobs] = useState(jobData); // State để lưu công việc từ API
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5; // Số công việc hiển thị trên mỗi trang

  //filter job when dropdown change
  

  //filter job when dropdown change
  useEffect(()=>{
    const filterJobs = () =>{
      let filtered = jobs;
  
      //when location change => effect will render again
      if(selectedLocation){
        filtered = filtered.filter(job => job.location === selectedLocation);
      }
  
      if(selectedIndustry){
        filtered = filtered.filter(job => job.industry === selectedIndustry);
      }
  
      if(selectedExperience){
        filtered = filtered.filter(job => job.experience === selectedExperience);
      }
  
      setFilteredJobs(filtered);
    };
    filterJobs();
  }, [selectedLocation, selectedIndustry, selectedExperience, jobs]);

  // Lấy dữ liệu job cho trang hiện tại
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  // Chuyển đến trang tiếp theo
  const handleNextPage = () => {
    if (currentPage < Math.ceil(filteredJobs.length / jobsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Quay lại trang trước
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };


  //company
  const company = [
    {
      id: 1,
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Logo_Samsung.svg/1200px-Logo_Samsung.svg.png', // Logo Samsung
      name: 'Samsung'
    },
    {
      id: 2,
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Google_2015_logo.svg/1024px-Google_2015_logo.svg.png', // Logo Google
      name: 'Google'
    },
    {
      id: 3,
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Logo_Microsoft.svg/1920px-Logo_Microsoft.svg.png', // Logo Microsoft
      name: 'Microsoft'
    },
    {
      id: 4,
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Apple_logo_black.svg/1024px-Apple_logo_black.svg.png', // Logo Apple
      name: 'Apple'
    },
    {
      id: 5,
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/IBM_logo.svg/1024px-IBM_logo.svg.png', // Logo IBM
      name: 'IBM'
    }
  ];

  return(
    <>
        <div className="container mx-auto justify-content-center align-items-center">
          {/* search */}
          <Card className="filter d-flex  justify-content-center align-items-center">
            <div className="d-flex align-items-center flex-column flex-lg-row">
              <form
                action="#"
                className="form-search d-flex align-items-center mb-0 position-relative "
                data-aos="fade-up"
                data-aos-delay="200"               
                onFocus={(e) => (e.target.style.borderColor = '#0056b3')}
                onBlur={(e) => (e.target.style.borderColor = '#007bff')}
              >
                <span className="search-icon" >
                  <FontAwesomeIcon icon={faSearch} style={{ color: '#007bff' }} />
                </span>
                <input
                  type="text"
                  className="form-control rounded-pill border pl-5"
                  placeholder="Tìm kiếm công việc..."
                  
                />
                <button type="submit" className="search btn btn-primary rounded-pill mx-2">
                  Search
                </button>
              </form>

              <div className="d-flex mx-2">
                <FilterDropdown label="địa điểm" options={locations} selected={selectedLocation} onSelect={setSelectedLocation} />
                <FilterDropdown label="ngành nghề" options={industries} selected={selectedIndustry} onSelect={setSelectedIndustry} />
                <FilterDropdown label="kinh nghiệm" options={experiences} selected={selectedExperience} onSelect={setSelectedExperience} />
              </div>
            </div>
          </Card>

          {/* job and post section*/}
          <div className="job-board-wrapper row">
            {/* job */}
            <div className="col-lg-9 col-md-12">
                <Job currentJobs={currentJobs}/>
                <div className="d-flex justify-content-center mt-4">
                  <Pagination>
                    <Pagination.Prev onClick={handlePreviousPage} disabled={currentPage === 1} />
                    <Pagination.Item>{currentPage}</Pagination.Item>
                    <Pagination.Next onClick={handleNextPage} disabled={currentPage === Math.ceil(filteredJobs.length / jobsPerPage)} />
                  </Pagination>
                </div>
              </div>
              {/* post */}
              <div className="col-lg-3 col-md-12">
                <Post companies={company} />
              </div>
          </div>
        </div>
    </>
  );

};

export default JobPost;