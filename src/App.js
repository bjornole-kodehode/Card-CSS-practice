import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [projects, setProjects] = useState([]);
  const [projectsLength, setProjectsLength] = useState(4);

  let boxes = [
    {
      name: "Live Page",
      id: 1
    },
    {
      name: "Live page",
      id: 2,
      url: "youtube.com"
    },
    {
      name: "Live page",
      id: 3,
      url: "github.com"
    },
    {
      name: "Live page",
      id: 4
    },
    {
      name: "Live page",
      id: 5,
      url: "google.com"
    },
    {
      name: "Live page",
      id: 6,
      url: "google.com"
    },
    {
      name: "Live page",
      id: 7,
      url: "google.com"
    },
    {
      name: "Live page",
      id: 8,
      url: "google.com"
    },
    {
      name: "Live page",
      id: 9
    },
    {
      name: "Live page",
      id: 10,
      url: "google.com"
    },
    {
      name: "Live page",
      id: 11,
      url: "google.com"
    },
    {
      name: "Live page",
      id: 12,
      url: "google.com"
    },
    {
      name: "Live page",
      id: 13,
      url: "google.com"
    },
    {
      name: "Live page",
      id: 14
    }
  ];

  useEffect(() => {
    setProjects(boxes);
  }, [projectsLength]);

  //projects.map((box) => console.log(box.url))
  let elements = projects.slice(0, projectsLength).map((box) =>
    !box.url ? (
      <div className="box" key={box.id}>
        <div className="bow-container">
          <div className="bow-box">
            <div className={!box.url ? "no-box-url bow" : "bow"}>
              <a
                href={box.url}
                style={
                  !box.url ? { cursor: "not-allowed" } : { cursor: "pointer" }
                }
              >
                No link avaible
              </a>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="box" key={box.id}>
        <div className="bow-container">
          <div className="bow-box">
            <div className="bow">
              <a href={box.url}>{box.name}</a>
            </div>
          </div>
        </div>
      </div>
    )
  );

  const handleLoadMore = () => {
    setProjectsLength((prev) => prev * 2);
    if (projectsLength > projects.length) {
      setProjectsLength(projects.length);
    }
    console.log("projectsLength: ", projectsLength);
  };
  const handleLoadLess = () => {
    setProjectsLength(projectsLength / 2);
  };
  console.log("projects.length: ", projects.length);
  return (
    <div className="App">
      <div className="elements">{elements.slice(0)}</div>
      <div>
        <button
          style={
            projectsLength >= 14 ? { display: "none" } : { display: "inline" }
          }
          onClick={handleLoadMore}
        >
          Show more
        </button>
        <button
          style={
            projectsLength <= 3 ? { display: "none" } : { display: "inline" }
          }
          onClick={handleLoadLess}
        >
          Show less
        </button>
      </div>
      {/* <div className="box">
        <div className="bow-container">
          <div className="bow-box">
            <div className="bow">
              <a href="#">Live page</a>
            </div>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="bow-container">
          <div className="bow-box">
            <div className="bow">
              <a href="#">Live page</a>
            </div>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="bow-container">
          <div className="bow-box">
            <div className="bow">
              <a href="#">Live page</a>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="box">
        <div className="bow">
          <a href="#">Live page</a>
        </div>
      </div>
      <div className="box">
        <div className="bow">
          <a href="#">Live page</a>
        </div>
      </div>
      <div className="box">
        <div className="bow">
          <a href="google.com" target="_blank">
            Live page
          </a>
        </div>
      </div> */}
    </div>
  );
}
