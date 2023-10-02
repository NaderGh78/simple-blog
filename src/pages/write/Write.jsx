import "./write.css";
import Container from "../../helpers/Container";
import WriteBgImg from "../../assets/img2.jpeg";
import { GetTitle } from "../../shared/GetTitle";

/*======================================*/
/*======================================*/
/*======================================*/

const Write = () => {

  GetTitle('| Write');

  return (
    <Container>
      <div className="write">
        <div className="write-box">
          <img src={WriteBgImg} alt="" />
          <div className="input-file-box">
            <div>
              <label htmlFor="up-img">
                +
              </label>
              <input type="file" id="up-img" />
            </div>
            <input type="text" placeholder="Title" />
            <button>Publish</button>
          </div>
          <textarea name="" id="" cols="30" rows="10" placeholder="Tell your story ..."></textarea>
        </div>
      </div>
    </Container>
  )
}

export default Write;