import { useState, useEffect } from "react";


function About(props) {

    const [about, setAbout] = useState(null);

    const getAboutData = async () => {
        const response = await fetch(props.URL + "about");
        const data = await response.json();
        setAbout(data);
        };

    useEffect(() => getAboutData(), []);

    const loaded = () => (
        <div>
          <h2>Jake Kaplan</h2>
          <h3>kaplanjt@gmail.com</h3>
          <p>I have been working extremely hard to build my talents within the tech industry. My specific interests lie within the crypto field, assisting in the creation and design of utility based nft projects.

          To be a part of the space such as the metaverse some of us live in is so humbling, and I intend to make it my mission to help explore the unexplored on the blockchain and in web3!</p>
        </div>
      );

    return about ? loaded() : <h1>Loading...</h1>
}


export default About