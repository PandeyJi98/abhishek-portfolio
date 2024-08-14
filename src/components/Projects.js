import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import adminDash from "../assets/img/AdminDashboard.png"
import chatImg from "../assets/img/Chat.png"
import momImg from "../assets/img/MOM.png"
import timelineImg from "../assets/img/Timeline.jpg"
import MaterialRequest from "../assets/img/MaterialRequest.png"
import taskManager from "../assets/img/taskManager.png"
import projectDashboard from "../assets/img/projectDashboard.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useState } from "react";
import CustomCard from "./CustomCard";
import { cardData } from "./CardData";
import "./newCss.css"


export const Projects = () => {
  const [activeTab, setActiveTab] = useState('first');

  const projects = [
    {
      title: "Admin Dashboard",
      description: `Developed a centralized interface allowing users to punch in and out for attendance tracking. Implemented
 various widgets including Task, Leads, File Manager, Comments,
Issue Pending Approvals, Accounts Overview, Finance Overview, and Purchase Order for streamlined management and
monitoring of company activities.`,
      imgUrl: adminDash,
    },
    {
      title: "Minutes Of Meeting",
      description: "This feature enhances productivity by providing a single platform for taking comprehensive meeting notes, creating and assigning tasks, and organizing information in tables, all within a user-friendly interface",
      imgUrl: momImg,
    },
    {
      title: "Chat",
      description: "I developed an advanced chat feature that mirrors the functionality of WhatsApp but includes unique enhancements tailored for project collaboration. This chat feature enhances project collaboration by integrating essential tools directly into the communication platform, making it easier for teams to share information, track project updates, and stay connected.",
      imgUrl: chatImg,
    },
    {
      title: "Timeline & Task Manager",
      description: "I developed the Timeline and Task Manager modules as essential components of an ERP SaaS product tailored for architecture and interior design firms. These modules are crafted to enhance project management and streamline task coordination, ensuring a seamless workflow and increased productivity.",
      imgUrl: taskManager,
    },
    {
      title: "Material Request",
      description: " I developed a Material Request Dashboard designed to streamline the process of requesting and ordering materials for interior projects. This feature enhances the efficiency of procurement and inventory management within the organization.",
      imgUrl: MaterialRequest,
    },
    {
      title: "Project Dashboard",
      description: "I developed a comprehensive Project Information feature that centralizes critical project details into a single, user-friendly interface. This feature is designed to enhance project management, streamline communication, and ensure that all relevant information is readily accessible.",
      imgUrl: projectDashboard,
    },
  ];
  
  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Experience & Projects</h2>

                <Container>
                <Row xs={1} sm={1} md={2} lg={2} className="g-5">
                <Col>
<div class="experience-card">
    <div class="circle">11/2021 - 07/2023</div>
    <div class="circle">Frontend Developer</div>
    <div class="card-inner"> Go Business India Pvt. Ltd.</div>
</div>
</Col>
                <Col>
<div class="experience-card2">
    <div class="circle">08/2023 - Present</div>
    <div class="circle">Software Engineer (React js)</div>
    <div class="card-inner">idesign.market</div>
</div>
</Col>
</Row>
    </Container>
                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                <Tab.Container id="projects-tabs" activeKey={activeTab} onSelect={handleTabChange}>
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                handleTabChange={handleTabChange}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Container>
      <Row xs={1} sm={1} md={1} lg={1} className="g-4">
        {cardData.map((card, index) => (
          <Col key={index}>
            <CustomCard
              title={card.title}
              description={card?.description}
              heading={card?.heading}
              subHeading1={card?.subHeading1}
              subHeading2={card?.subHeading2}
              subHeading3={card?.subHeading3}
              subHeading4={card?.subHeading4}
              subHeadin1Content={card?.subHeadin1Content}
              subHeadin2Content={card?.subHeadin2Content}
              subHeadin3Content={card?.subHeadin3Content}
              subHeadin4Content={card?.subHeadin4Content}
            />
          </Col>
        ))}
      </Row>
    </Container>
                      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p> */}
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}