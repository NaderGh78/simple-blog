import './author.css';
import Container from '../../helpers/Container';
import { useParams } from 'react-router-dom';
import { postData } from "../../config/data";
import Post from '../../components/post/Post';
import { GetTitle } from "../../shared/GetTitle";

/*======================================*/
/*======================================*/
/*======================================*/

const Author = () => {

    GetTitle('| Author');

    const { id } = useParams();

    // in order to get all author posts 
    const getAllAuthorPosts = postData.filter(a => a.userId === Number(id));

    //in order the get the [author img , author info details]
    const getSingleAuthorData = getAllAuthorPosts.find(a => a.userId === Number(id));

    console.log(getSingleAuthorData.postAuthor);

    return (
        <div>
            <Container>
                <div className="author">
                    <div className="author-top-part">
                        <div className="left">
                            <img src={getSingleAuthorData.AuthorImg} alt="" />
                            <h5>{getSingleAuthorData.postAuthor}</h5>
                        </div>
                        <div className="right">
                            <ul>
                                <li>country : {getSingleAuthorData.AuthorCountry}</li>
                                <li>joined in : {getSingleAuthorData.AuthorJoind}</li>
                                <li>job : {getSingleAuthorData.AuthorJob}</li>
                                <li>posts : {getAllAuthorPosts.length} {getAllAuthorPosts.length > 1 ? "posts" : "post"}</li>
                            </ul>
                        </div>
                    </div>
                    <h2>{getSingleAuthorData.postAuthor} posts :</h2>
                    <div className="posts">
                        <div className="posts-content">
                            {getAllAuthorPosts.map(d => (
                                <Post data={d} key={d.postId} />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Author;