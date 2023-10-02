import "./single.css";
import Container from "../../helpers/Container";
import Sidebar from "../../components/sidebar/Sidebar";
import Singlepost from "../../components/singlePost/Singlepost";

/*======================================*/
/*======================================*/
/*======================================*/

const Single = () => {
  return (
    <div className="single">
      <Container>
        <div className="single-box">
          <Singlepost />
          <Sidebar />
        </div>
      </Container>
    </div>
  )
}

export default Single;