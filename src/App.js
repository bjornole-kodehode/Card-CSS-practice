import { useEffect, useState } from "react";
import "./styles.css";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Dropdown from "./components/Dropdown";

export default function App() {
  const [projects, setProjects] = useState([]);
  const [projectsLength, setProjectsLength] = useState(4);
  const [favorites, setFavorites] = useState([]);

  let boxes = [
    {
      name: "Live Page",
      id: 1,
      fav: true
    },
    {
      name: "Live page",
      id: 2,
      fav: false,
      url: "youtube.com"
    },
    {
      name: "Live page",
      id: 3,
      fav: true,
      url: "github.com"
    },
    {
      name: "Live page",
      id: 4,
      fav: false
    },
    {
      name: "Live page",
      id: 5,
      fav: true,
      url: "google.com"
    },
    {
      name: "Live page",
      id: 6,
      fav: false,
      url: "google.com"
    },
    {
      name: "Live page",
      id: 7,
      fav: true,
      url: "google.com"
    },
    {
      name: "Live page",
      id: 8,
      fav: false,
      url: "google.com"
    },
    {
      name: "Live page",
      id: 9,
      fav: false
    },
    {
      name: "Live page",
      id: 10,
      fav: true,
      url: "google.com"
    },
    {
      name: "Live page",
      id: 11,
      fav: false,
      url: "google.com"
    },
    {
      name: "Live page",
      id: 12,
      fav: true,
      url: "google.com"
    },
    {
      name: "Live page",
      id: 13,
      fav: false,
      url: "google.com"
    },
    {
      name: "Live page",
      id: 14,
      fav: true
    }
  ];

  useEffect(() => {
    setProjects(boxes);
    setFavorites(projects.map((fav) => fav.fav));
    //console.log(favorites);
  }, [projectsLength]);
  const fav = projects.map((proj) => (proj.fav === true ? <StarIcon /> : null));

  //projects.map((box) => console.log(box.url))
  let elements = projects.slice(0, projectsLength).map(
    (box) => (
      /* !box.url ? ( */
      <div className="box" key={box.id}>
        {box.fav ? (
          <StarIcon className="starIcon" /* style={{ color: "orange" }} */ />
        ) : null}
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
    )
    /*  ) : (
      <div className="box" key={box.id}>

        <div className="bow-container">
          <div className="bow-box">
            <div className="bow">
              <a href={box.url}>{box.name}</a>
            </div>
          </div>
        </div>
      </div>
    ) */
  );

  const handleLoadMore = () => {
    setProjectsLength((prev) => prev * 2);
    if (projectsLength > projects.length) {
      setProjectsLength(projects.length);
    }
    //console.log("projectsLength: ", projectsLength);
  };
  const handleLoadLess = () => {
    setProjectsLength(projectsLength / 2);
  };

  const handleProjectsLengthChange = (e) => {
    setProjectsLength(e.target.value);
    if (("e.target ", e.target.value === "")) {
      setProjectsLength(4);
    }
  };

  return (
    <div className="App">
      <div style={{ display: "flex", alignItems: "center" }}>
        <div>
          <Dropdown
            projects={projects}
            setProjectsLength={setProjectsLength}
            options={[
              "All projects",
              `Favorites`,
              "All projects2",
              `Favorites2`,
              "All projects3",
              `Favorites3`,
              "All projects4",
              `Favorites4`,
              "All projects5",
              `Favorites5`
            ]}
          />
        </div>

        <p>Antall prosjekter som vises:</p>
        <input
          type="number"
          min="1"
          max={projects.length}
          onChange={handleProjectsLengthChange}
          placeholder="4"
        />
      </div>
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
