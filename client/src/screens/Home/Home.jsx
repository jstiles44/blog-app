import "./Home.css";
import Nav from "../../components/Nav";
import Posts from "../../components/Posts/Posts";

const Home = () => {
  return (
    <Nav>
      <div className="home">
        <Posts />
      </div>
    </Nav>
  );
};

export default Home;
