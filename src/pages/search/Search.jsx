import './search.css';
import Container from '../../helpers/Container';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { postData } from "../../config/data";
import Post from '../../components/post/Post';
import { GetTitle } from "../../shared/GetTitle";

/*======================================*/
/*======================================*/
/*======================================*/

const Search = () => {

    GetTitle('| Search');

    const [query, setQuery] = useState("");

    const [notEmpty, setNotEmpty] = useState(false);

    const [noResult, setNoResult] = useState(false);

    const [updated, setUpdated] = useState([]);

    const getFilterPosts = postData.filter(el => el.postTitle.toLowerCase().includes(query.toLowerCase()));

    const handleSearch = (e) => {
        if (!query.length) {
            setNotEmpty(true);
        } else if (getFilterPosts.length) {
            setUpdated(getFilterPosts);
            setNoResult(false)
        } else {
            setNotEmpty(false);
            setUpdated([]);
            setNoResult(true)
        }
    }

    const handleChange = (e) => {
        setQuery(e.target.value.trim());
        if (e.target.value.length !== 0) {
            setNotEmpty(false);
        } else {
            setNotEmpty(true);
        }
    }

    //console.log{}


    //triger handleSearch when press enter key
    const handleKeyPress = event => {
        if (event.key == 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className='search-section'>
            <Container>
                <div className="search-all">
                    <p><Link to="/">Home</Link> / Search (By Posts Title)</p>
                    <div className="search-input-box">
                        <input type="text"
                            onChange={handleChange}
                            onKeyPress={handleKeyPress}
                            className={notEmpty ? "not-empty" : ""}
                        />
                        <button onClick={handleSearch}>search</button>
                        {notEmpty ? <p className='err-msg'>Search value is required</p> : ""}
                    </div>
                    <div className="posts">
                        <div className="posts-content">
                            {
                                updated.map(d => <Post data={d} key={d.postId} />)
                            }
                            {noResult ? <h1>Sorry, can't find matching posts .</h1> : ""}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Search;