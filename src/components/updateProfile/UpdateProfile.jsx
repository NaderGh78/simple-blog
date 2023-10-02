import './updateProfile.css';
import { LiaUserCircle } from "react-icons/lia";
import UserImg from "../../assets/profile-img.jpg";

/*======================================*/
/*======================================*/
/*======================================*/

const UpdateProfile = () => {
    return (
        <div className='update-profile'>
            <div className="heading-title">
                <h2>update your account</h2>
                <span>delete account</span>
            </div>
            <div className="form-update">
                <form>
                    <div className="top-content">
                        <h5>profile picture</h5>
                        <div>
                            <img src={UserImg} alt="" />
                            <label htmlFor="fileInput">
                                <LiaUserCircle />
                                <input type="file" id='fileInput' />
                            </label>
                        </div>
                    </div>
                    <label htmlFor="">
                        Username
                        <input type="text" placeholder='Username' />
                    </label>
                    <label htmlFor="">
                        Email
                        <input type="email" placeholder='Email' />
                    </label>
                    <label htmlFor="">
                        Password
                        <input type="password" placeholder='Password' />
                    </label>
                    <div style={{ textAlign: "center" }}>
                        <button>update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateProfile;