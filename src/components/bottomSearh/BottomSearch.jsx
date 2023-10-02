import './bottomSearch.css';
import Container from '../../helpers/Container';
import { Link } from 'react-router-dom';
import ProfileImg from "../../assets/profile-img.jpg";
import { LiaSearchSolid } from "react-icons/lia";

/*======================================*/
/*======================================*/
/*======================================*/

const BottomSearch = () => {
    return (
        <div className='bottom-search'>
            <Container>
                <div className="search">
                    <Link to="/settings"><img src={ProfileImg} alt="" /></Link>
                    <Link to="/search">
                        <LiaSearchSolid />
                    </Link>
                </div>
            </Container>
        </div>
    )
}

export default BottomSearch;