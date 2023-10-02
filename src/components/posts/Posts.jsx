import "./posts.css";
import Post from "../post/Post";
import { postData } from "../../config/data";
import { useEffect, useState } from "react";
import { LiaAngleDownSolid } from "react-icons/lia";

/*======================================*/
/*======================================*/
/*======================================*/

const Posts = () => {

    const [postsSelected, setPostsSelected] = useState(postData);

    useEffect(() => {
        //by default make the posts sorting as in postData array of obj 
        setPostsSelected([...postsSelected]);

    }, []);

    // Sort Post by Date
    function sortPostsByDate(e) {
        if (e.target.value === 'Default') {
            //by default make the posts sorting by it id 
            setPostsSelected([...postData.sort((a, b) => { return a.userId - b.userId })]);
        }
        if (e.target.value === 'OldestToNewest') {
            // Sort Post by Date From Oldest To Newset
            setPostsSelected([...postsSelected.sort((a, b) => { return new Date(a.postDate) - new Date(b.postDate) })]);
        }
        if (e.target.value === 'NewestToOldest') {
            // Sort Post by Date From Newset To Oldest
            setPostsSelected([...postsSelected.sort((a, b) => { return new Date(b.postDate) - new Date(a.postDate) })]);
        }
    }

    return (
        <div className="posts">
            <div className="select-box">
                <select name="" id="start" onChange={(e) => sortPostsByDate(e)}>
                    <option value="Default">Default</option>
                    <option value="OldestToNewest">Post Title ,Oldest To Newest</option>
                    <option value="NewestToOldest">Post Title ,Newest To Oldest</option>
                </select>
                <LiaAngleDownSolid />
            </div>
            <div className="posts-content">
                {postsSelected.map((d, i) => (
                    <Post data={d} key={i} />
                ))}
            </div>
        </div>
    )
}

export default Posts;