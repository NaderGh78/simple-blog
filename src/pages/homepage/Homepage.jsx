import "./homepage.css";
import Container from "../../helpers/Container";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import { GetTitle } from "../../shared/GetTitle";

/*======================================*/
/*======================================*/
/*======================================*/

const Homepage = () => {

  GetTitle('');

  return (
    <div className="homepage">
      <Header />
      <Container >
        <div className="home">
          <Posts />
          <Sidebar />
        </div>
      </Container>
    </div>
  )
}

export default Homepage;