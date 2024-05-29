import AuthMessage from "@components/AuthMessage";
import NavBar from "@components/NavBar";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <NavBar />
      <AuthMessage />
      <div>
        <p>Main function of the app goes here</p>
      </div>
    </div>
  );
};

export default Home;
