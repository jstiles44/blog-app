import "./Home.css";
import Layout from "../../components/shared/Layout/Layout";
import Posts from "../../components/Posts/Posts";

const Home = () => {
  return (
    <Layout>
      <div>
        <div className="home">
          <Posts />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
