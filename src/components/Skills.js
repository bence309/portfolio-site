import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import aws from "../assets/img/AWS.png"
import docker from "../assets/img/docker.svg"
import linux from "../assets/img/Linux.svg.png"
import kubernetes from "../assets/img/Kubernetes.png"
import terraform from "../assets/img/terraform.svg"
import react from "../assets/img/React.svg.png"
import node from "../assets/img/Node.svg.png"
import python from "../assets/img/Python.svg.png"
import mongodb from "../assets/img/mongodb.svg"
import postgres from "../assets/img/postgres.svg.png"
import c4 from "../assets/img/c4.svg"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>These are the technologies, languages and skills I learned at Codecool or experienced by my pet projects:</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={aws} alt="Image" />
                                <h5>AWS</h5>
                            </div>
                            <div className="item">
                                <img src={docker} alt="Image" />
                                <h5>Docker</h5>
                            </div>
                            <div className="item">
                                <img src={linux} alt="Image" />
                                <h5>Linux</h5>
                            </div>
                            <div className="item">
                                <img src={kubernetes} alt="Image" />
                                <h5>Kubernetes</h5>
                            </div>
                            <div className="item">
                                <img src={terraform} alt="Image" />
                                <h5>Terraform</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={node} alt="Image" />
                                <h5>Node</h5>
                            </div>
                            <div className="item">
                                <img src={python} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={mongodb} alt="Image" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={postgres} alt="Image" />
                                <h5>PostgreSQL</h5>
                            </div>
                            <div className="item">
                                <img src={c4} alt="Image" />
                                <h5>C#</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
