import './singlepost.css';
import { useParams, Link, useLocation } from 'react-router-dom';
import { postData } from "../../config/data";
import { LiaEditSolid, LiaTrashAlt } from "react-icons/lia";
import { GetTitle } from "../../shared/GetTitle";
import { useEffect } from 'react';

/*======================================*/
/*======================================*/
/*======================================*/

const Singlepost = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    GetTitle('| Single Post');

    const { id } = useParams();

    const location = useLocation();

    const path = location.pathname.split("/")[4];

    // get single post 
    const getSinglePost = postData?.filter(c => c.userId === Number(id)).find(x => x.postId === Number(path));

    return (
        <div className='singlepost'>
            <div className="singlepost-box">
                <img src={getSinglePost.postImg} alt="" />
                <div className="title-box">
                    <h3>{getSinglePost.postTitle}</h3>
                    <div>
                        <Link>
                            <LiaEditSolid />
                        </Link>
                        <Link>
                            <LiaTrashAlt />
                        </Link>
                    </div>
                </div>
                <div className="author-box">
                    <h3>Author : <Link to={`/author/${getSinglePost.userId}`}>{getSinglePost.postAuthor}</Link></h3>
                    <span>{getSinglePost.postDate}</span>
                </div>
                <div className="post-desc">
                    <p>{getSinglePost.postDesc}</p>
                </div>
            </div>
        </div>
    )
}

export default Singlepost;