import { Link } from "react-router-dom";

/*======================================*/
/*======================================*/
/*======================================*/

const Post = ({ data: { userId,postId, postImg, postCategory, postTitle, postDate, postDesc } }) => {
    return (
        <div className="post-box">
            <img src={postImg} alt="" />
            <ul className="category">
                {postCategory?.map(c => (<li key={c.postId}><Link>{c}</Link></li>))}
            </ul>
            <Link to={`/author/${userId}/post/${postId}`}>
                <h2 className="post-title">{postTitle}</h2>
            </Link>
            <span className="date">{postDate}</span>
            <p>{postDesc.length > 120 ? postDesc.slice(0, 120) + " ..." : postDesc}</p>
        </div>
    )
}

export default Post;