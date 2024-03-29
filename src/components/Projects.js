import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility once>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>These are my pet projects I made after I finished my Codecool studies. Please check them out if you are interested.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">To-Do Web Application</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Pizza Restaurant</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Portfolio Site</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <p>This is one of my DevOps related pet projects. GitHub link: <a href="https://github.com/bence309/petproject">https://github.com/bence309/petproject</a></p>
                        <p>It is a to-do list as a web application, the user can add, delete, update to-do items. It is connected to a PostgreSQL database (with AWS RDS)</p>
                        <p>CI/CD: I used GitHub Actions for this one. On every push to the repository, a PEP8 syntax check is run on the app.py file, ensuring code quality. The Dockerhub image is also automatically updated, simplifying deployment.</p>
                        <p>Stack: Flask (Python), Docker, Terraform and a little bit of CSS and HTML</p>
                        <p>DockerHub link: bence309/bence309-petproject</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          This is a fast food ordering full-stack web application, where the user can choose between many types of foods and drinks. GitHub Link: <a href="https://github.com/bence309/restaurant-petproject">https://github.com/bence309/restaurant-petproject</a>
                        </p>
                        <p>
                          The user can register and sign in to the app. It has a MongoDB connection for the registrations,
                          also it has a dark/light mode toggle and many more features like a "menu" page, where the app
                          randomly gives the user foods with lowered prices.
                        </p>
                        <p>
                          Stack: React, JavaScript, Express, Node.js, MongoDB, CSS, HTML
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>This is actually this site. Plans for the future: Selenium testing, Monitoring with Grafana/Prometheus, CI/CD pipeline with Jenkins, Dockerization and so on.</p>
                        <p>GitHub Link: <a href="https://github.com/bence309/portfolio-site">https://github.com/bence309/portfolio-site</a></p>
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

export default Projects;
