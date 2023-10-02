import "./sidebar.css";
import AboutImg from "../../assets/profile-img.jpg";
import { Link } from "react-router-dom";
import { FaSquareFacebook, FaSquareInstagram, FaSquareTwitter } from "react-icons/fa6";

/*======================================*/
/*======================================*/
/*======================================*/

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-content">
                <div className="about">
                    <h3>about me</h3>
                    <img src={AboutImg} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis laudantium</p>
                </div>
                <div className="category">
                    <h3>categories</h3>
                    <ul className="cate-ul">
                        <li><Link>life</Link></li>
                        <li><Link>music</Link></li>
                        <li><Link>sport</Link></li>
                        <li><Link>style</Link></li>
                        <li><Link>tech</Link></li>
                        <li><Link>cinema</Link></li>
                    </ul>
                </div>
                <div className="follow">
                    <h3>follow us</h3>
                    <div className="social-box">
                        <a href=""><FaSquareFacebook /></a>
                        <a href=""><FaSquareInstagram /></a>
                        <a href=""><FaSquareTwitter /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;