import AuthMessage from "@components/AuthMessage";
import NavBar from "@components/NavBar";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <NavBar />
      <AuthMessage />
      <div>
        <p>This is the about section for the application</p>
      </div>
    </div>
  );
};

export default About;
