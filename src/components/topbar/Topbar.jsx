import "./topbar.css";
import { Link, useLocation } from "react-router-dom";
import { LiaSearchSolid, LiaBarsSolid, LiaTimesSolid } from "react-icons/lia";
import { FaSquareFacebook, FaSquareInstagram, FaSquareTwitter } from "react-icons/fa6";
import ProfileImg from "../../assets/profile-img.jpg";
import { SearchContext } from "../../context/searchBottomContext";
import { useContext } from "react";
import { useRef, useState } from "react";

/*======================================*/
/*======================================*/
/*======================================*/

const Topbar = () => {
    const location = useLocation();
    const activePath = location.pathname.split('/')[1];
    const activeRef = useRef();
    const iconClickRef = useRef();
    const [isBarIconClicked, setIsBarIconClicked] = useState(false);
    const { showBarIcon } = useContext(SearchContext);
    // console.log(showBarIcon);

    // add active class to topbar-all
    const handleAddActiveClass = () => {
        setIsBarIconClicked(!isBarIconClicked);
        activeRef.current.classList.toggle('active');
    }

    // close the menu if it open , when click on any element inside the menu like [link,img,icon,etc..]
    const handleElementClicked = () => {
        //should make condition just only in devcies that less than 768
        if (window.innerWidth < 768) {
            iconClickRef.current.click();
            document.documentElement.scrollTo(0, 0);
        }
    }

    return (
        <div className="topbar">
            {/*
            - FIRST WE SHOULD CHECK IF THE THE WINDOW SIZE IS LESS THAN 768,IN ORDER TO SHOW THE [BAR ICON]
            - SECOND WE CHANGE THE BAR ICON TO CLOSE ICON ,DEPEND IF THE [ICON ITSELF] IS CLICKED 
            */}
            {showBarIcon &&
                <span className="bars-icon" onClick={handleAddActiveClass} ref={iconClickRef}>
                    {isBarIconClicked ? <LiaTimesSolid /> : <LiaBarsSolid />}
                </span>
            }

            <div className="topbar-all" ref={activeRef}>
                <div className="socials">
                    <div className="social-box">
                        <a href="" onClick={handleElementClicked}><FaSquareFacebook /></a>
                        <a href="" onClick={handleElementClicked}><FaSquareInstagram /></a>
                        <a href="" onClick={handleElementClicked}><FaSquareTwitter /></a>
                    </div>
                </div>
                <div className="pages-links">
                    <ul>
                        <li><Link to="/" className={activePath === "" ? "active" : ""} onClick={handleElementClicked}>home</Link></li>
                        <li><Link to="/write" className={activePath === "write" ? "active" : ""} onClick={handleElementClicked}>write</Link></li>
                    </ul>
                </div>
                <div className="search">
                    <Link to="/settings"><img src={ProfileImg} alt="" onClick={handleElementClicked} /></Link>
                    <Link to="/search">
                        <LiaSearchSolid onClick={handleElementClicked} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Topbar;