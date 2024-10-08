import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import "./newCss.css";
export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
              As a dedicated MERN Stack Developer, I specialize in building scalable, responsive web applications using React.js, Node.js, Express.js, and MongoDB. My expertise in frontend technologies like JavaScript, Bootstrap, CSS, and HTML5 enables me to create intuitive, user-focused interfaces. With a proven track record of delivering high-quality, impactful solutions,
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="pl">
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__text">
                    {" "}
                    <div className="item">
                      {/* <img src={meter1} alt="Image" /> */}
                      <h5>React Js</h5>
                    </div>
                  </div>
                </div>
                <div className="pl">
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__text">
                    {" "}
                    <div className="item">
                      {/* <img src={meter1} alt="Image" /> */}
                      <h5>Javascript</h5>
                    </div>
                  </div>
                </div>
                <div className="pl">
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__text">
                    {" "}
                    <div className="item">
                      {/* <img src={meter1} alt="Image" /> */}
                      <h5>Node Js</h5>
                    </div>
                  </div>
                </div>
                <div className="pl">
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__text">
                    {" "}
                    <div className="item">
                      {/* <img src={meter1} alt="Image" /> */}
                      <h5>Express Js</h5>
                    </div>
                  </div>
                </div>
                <div className="pl">
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__text">
                    {" "}
                    <div className="item">
                      {/* <img src={meter1} alt="Image" /> */}
                      <h5>Mongo DB</h5>
                    </div>
                  </div>
                </div>
                <div className="pl">
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__text">
                    {" "}
                    <div className="item">
                      {/* <img src={meter1} alt="Image" /> */}
                      <h5>Bootstrap</h5>
                    </div>
                  </div>
                </div>
                <div className="pl">
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__text">
                    {" "}
                    <div className="item">
                      {/* <img src={meter1} alt="Image" /> */}
                      <h5>Git & Github</h5>
                    </div>
                  </div>
                </div>
                <div className="pl">
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__text">
                    {" "}
                    <div className="item">
                      {/* <img src={meter1} alt="Image" /> */}
                      <h5>HTML 5</h5>
                    </div>
                  </div>
                </div>
                <div className="pl">
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__text">
                    {" "}
                    <div className="item">
                      {/* <img src={meter1} alt="Image" /> */}
                      <h5>Telwind CSS</h5>
                    </div>
                  </div>
                </div>
                <div className="pl">
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__dot"></div>
                  <div class="pl__text">
                    {" "}
                    <div className="item">
                      {/* <img src={meter1} alt="Image" /> */}
                      <h5>Css</h5>
                    </div>
                  </div>
                </div>

                
                {/* <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Node JS</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Express Js</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Mongo DB</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Telwind Css</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>HTML 5</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Git & Github</h5>
                </div> */}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
