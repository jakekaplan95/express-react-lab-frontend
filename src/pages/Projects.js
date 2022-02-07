import { useState, useEffect } from "react";

function Projects(props) {

    const [projects, setProjects] = useState(null)

    const getProjectsData = async () => {
        const response = await fetch(props.URL + "projects");
        const data = await response.json();
        setProjects(data);
    };

    useEffect(() => getProjectsData(), []);

    const loaded = () => {
        return projects.map((project) => (
            <div>
                <h1>The Greyverse</h1>
                <img src={project.image} />
                <a href="https://www.thegreyverse.com/">
                    <button>Github</button>
                </a>
                <a href="https://www.thegreyverse.com/">
                    <buttton>Live Site</buttton>
                </a>
            </div>
        ));
    }

    return projects ? loaded() : <h1>Loading....</h1>
}
export default Projects