import './settings.css';
import Container from "../../helpers/Container";
import Sidebar from '../../components/sidebar/Sidebar';
import UpdateProfile from '../../components/updateProfile/UpdateProfile';
import { GetTitle } from "../../shared/GetTitle";

/*======================================*/
/*======================================*/
/*======================================*/

const Settings = () => {

    GetTitle('| Settings');

    return (
        <div className='settings'>
            <Container>
                <div className="settings-box">
                    <UpdateProfile />
                    <Sidebar />
                </div>
            </Container>
        </div>
    )
}

export default Settings;