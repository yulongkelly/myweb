import React from "react";

export default function Projects() {
  return (
    <section className="container-fluid">
      <div id="projects" className="justify-content-center">
        <div className="row align-items-center">
          <div className="col-md-6 img justify-content-center">
            <img
              className="img-fluid"
              src="https://yulongkellyweb.s3.amazonaws.com/academic-min.png"
              alt="project1"
            />
          </div>
          <div className="col-md-6 text-center">
            <div className="row justify-content-center">
              <div className="col-10 col-lg-8">
                <h2>
                  <a
                    href="https://github.com/yulongkelly/Academic-Anonymous"
                    style={{ color: "black" }}
                  >
                    Academic Anonymous
                  </a>
                </h2>
                <p className="intro">
                  Academic Anonymous is a live QA session that allows students
                  to continuously ask questions during in-class lectures.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6 text-center order-2 order-md-1">
            <div className="row justify-content-center">
              <div className="col-10 col-lg-8">
                <h2>
                  <a
                    href="https://github.com/yulongkelly/Gomoku"
                    style={{ color: "black" }}
                  >
                    Five In a Row
                  </a>
                </h2>
                <p className="intro">
                  This is an abstract strategy board game.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 order-1 order-md-2">
            <img
              className="img-fluid"
              src="https://yulongkellyweb.s3.amazonaws.com/five-in-a-row-min.png"
              alt="project2"
            />
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6 img justify-content-center">
            <img
              className="img-fluid"
              src="https://yulongkellyweb.s3.amazonaws.com/habit-min.png"
              alt="project3"
              style={{ maxHeight: 500, paddingLeft: 150 }}
            />
          </div>
          <div className="col-md-6 text-center">
            <div className="row justify-content-center">
              <div className="col-10 col-lg-8">
                <h2>
                  <a
                    href="https://github.com/yulongkelly/DeltaHacks"
                    style={{ color: "black" }}
                  >
                    Habit Haven
                  </a>
                </h2>
                <p className="intro">
                  This app tackles the issue of self-discipline by setting
                  short-term goals for the user which will lead them towards a
                  more productive path.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
