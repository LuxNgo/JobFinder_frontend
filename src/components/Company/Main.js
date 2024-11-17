import Company from "./Company";


function Main(){
    const companies = [
        {
          id: 1,
          name: 'Tech Solutions Inc.',
          logo: 'https://via.placeholder.com/50', // Placeholder image for logo
          industry: 'Information Technology',
          location: 'New York, USA',
          description: 'Providing cutting-edge tech solutions for businesses worldwide.'
        },
        {
          id: 2,
          name: 'Green Energy Corp.',
          logo: 'https://via.placeholder.com/50', 
          industry: 'Renewable Energy',
          location: 'San Francisco, USA',
          description: 'Leading the way in sustainable energy and green technologies.'
        },
        {
          id: 3,
          name: 'Health Plus Medical',
          logo: 'https://via.placeholder.com/50', 
          industry: 'Healthcare',
          location: 'London, UK',
          description: 'Innovative healthcare solutions for a healthier tomorrow.'
        },
        {
          id: 4,
          name: 'FinTech Innovators',
          logo: 'https://via.placeholder.com/50', 
          industry: 'Financial Technology',
          location: 'Berlin, Germany',
          description: 'Transforming the finance industry with innovative technology.'
        },
        {
          id: 5,
          name: 'EduSmart Learning',
          logo: 'https://via.placeholder.com/50', 
          industry: 'Education Technology',
          location: 'Sydney, Australia',
          description: 'Smart learning solutions for the next generation of students.'
        }
    ];

    return(
        <section>
            <div  style={{margin: '70px 0px'}}>
                <h1 className="d-flex justify-content-center">Thương hiệu lớn tiêu biểu</h1>
                <p className="d-flex  justify-content-center">Những thương hiệu tuyển dụng đã khẳng định được vị thế trên thị trường.</p>
            </div>
            <Company coms={companies} />
        </section>
    );
};
export default Main;