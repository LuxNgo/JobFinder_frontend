import Decrep from "./Decrep";
import Company from "./Company";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
function Main(){
    const jobDetails = [
        {
          id: 1,
          companyName: "TechCorp",
          logo: "https://example.com/logo1.png",
          title: "Frontend Developer",
          location: "Hanoi",
          level: "Mid-level",
          industry: "IT/Software",
          type: "Full-time",
          experience: "2+ years",
          salary: "12-15 triệu",
          deadline: "2023-12-31",
          applicants: 45,
          jobDescription: "We are looking for a skilled frontend developer to join our dynamic team.",
          responsibilities: [
            "Develop and maintain web applications.",
            "Collaborate with backend developers and designers.",
            "Optimize applications for maximum speed.",
            "Write clean, maintainable, and efficient code.",
          ],
          jobRequirements: [
            "Proficient in HTML, CSS, and JavaScript.",
            "Experience with React and Redux.",
            "Good understanding of responsive design.",
            "Excellent problem-solving skills.",
          ],
          companyScale: "200-500 employees",
          companyField: "Information Technology",
          companyLocation: "Hanoi, Vietnam",
        },
        {
          id: 2,
          companyName: "InnoSoft",
          logo: "https://example.com/logo2.png",
          title: "Backend Developer",
          location: "Ho Chi Minh City",
          level: "Senior",
          industry: "IT/Software",
          type: "Part-time",
          experience: "5+ years",
          salary: "20-25 triệu",
          deadline: "2024-01-15",
          applicants: 30,
          jobDescription: "Seeking an experienced backend developer to improve our server-side architecture.",
          responsibilities: [
            "Develop and maintain server-side logic.",
            "Build and manage databases.",
            "Integrate with frontend applications.",
            "Ensure code is scalable and optimized.",
          ],
          jobRequirements: [
            "Strong knowledge of Node.js and Express.",
            "Experience with SQL and NoSQL databases.",
            "Understanding of RESTful API design.",
            "Familiarity with cloud platforms like AWS.",
          ],
          companyScale: "50-200 employees",
          companyField: "Software Development",
          companyLocation: "Ho Chi Minh City, Vietnam",
        },
        {
          id: 3,
          companyName: "DesignPro",
          logo: "https://example.com/logo3.png",
          title: "UI/UX Designer",
          location: "Da Nang",
          level: "Junior",
          industry: "Design",
          type: "Freelance",
          experience: "1+ year",
          salary: "8-10 triệu",
          deadline: "2023-11-30",
          applicants: 20,
          jobDescription: "Creative UI/UX designer needed to enhance user experience for mobile applications.",
          responsibilities: [
            "Create wireframes, prototypes, and high-fidelity designs.",
            "Conduct user research and analyze feedback.",
            "Collaborate with developers to implement designs.",
            "Ensure consistent and appealing visual design.",
          ],
          jobRequirements: [
            "Proficiency in design tools like Figma and Adobe XD.",
            "Good understanding of user-centered design principles.",
            "Attention to detail and creative thinking.",
            "Basic knowledge of HTML/CSS is a plus.",
          ],
          companyScale: "10-50 employees",
          companyField: "Design and Creative Services",
          companyLocation: "Da Nang, Vietnam",
        },
      ];
      

      //find job with id
      const {id} = useParams();
      const job = jobDetails.find(job => job.id === parseInt(id));

    return(
        <>
            {/* fuild md: larger md => keep fluid */}
            <Container fluid="xl" className="d-flex" style={{marginTop:'150px'}}>
                <Row style={{width:'100%'}}>
                    <Col lg={8}><Decrep job={job} /></Col>
                    <Col lg={4} xs={5} className="ms-auto"><Company logo={job.logo} name={job.companyName} number_of_employees={job.companyScale} field={job.companyField} location={job.companyLocation} /></Col>
                    
                </Row> 
            </Container>          
        </>
    );
};

export default Main;