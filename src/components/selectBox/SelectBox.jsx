import './selectBox.css';
import { postData } from "../../config/data";
import { useEffect, useState } from 'react';
import { LiaAngleDownSolid } from "react-icons/lia";
import Posts from '../posts/Posts';

/*======================================*/
/*======================================*/
/*======================================*/

const SelectBox = () => {

    const [posts, setPosts] = useState(postData);

    useEffect(() => {
        //by default make the posts sorting by it id
        setPosts([...posts.sort((a, b) => { return a.postId - b.postId })]);
    }, []);

    // Sort Post by Date
    function sortPostsByPrice(e) {

        if (e.target.value === 'Default') {
            // Sorting Test by price -  Low To High 
            setPosts([...posts.sort((a, b) => { return a.postId - b.postId })]);
        }

        if (e.target.value === 'OldestToNewest') {
            // Sort Post by Date From Oldest To Newset
            setPosts([...posts.sort((a, b) => { return new Date(a.postDate) - new Date(b.postDate) })]);
        }

        if (e.target.value === 'NewestToOldest') {
            // Sort Post by Date From Newset To Oldest
            setPosts([...posts.sort((a, b) => { return new Date(b.postDate) - new Date(a.postDate) })]);
        }
    }

    return (
        <div className='select-box'>
            <select name="" id="start" onChange={(e) => sortPostsByPrice(e)}>
                <option value="Default">Default</option>
                <option value="OldestToNewest">Post Title ,Oldest To Newest</option>
                <option value="NewestToOldest">Post Title ,Newest To Oldest</option>
            </select>
            <LiaAngleDownSolid />
            {postData.map(d => (
                <Posts data={d} key={d.postId} />
            ))}
        </div>
    )
}

export default SelectBox;