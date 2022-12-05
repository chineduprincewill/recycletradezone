import { Link } from 'react-router-dom';

const ProfilesList = ({profiles}) => {


    return(
        <table class="table nowrap table-striped align-middle" style={{ width:"100%" }}>
            <thead>
                <tr>
                    <th>Role</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>State</th>
                    <th>Approved?</th>
                    <th>...</th>
                </tr>
            </thead>
            <tbody>
                { profiles.map(profile => {
                    return(
                        <tr key={profile.id}>
                            <td>{profile.usertype}</td>
                            <td>{profile.fullname}</td>
                            <td>{profile.email}</td>
                            <td>{profile.phonenumber}</td>
                            <td>{profile.state}</td>
                            <td>{profile.approval_status == 1 ? 'Yes' : 'No'}</td>
                            <td>
                                <Link 
                                    type="button" className="btn btn-link text-decoration-none btn-icon waves-effect waves-light" 
                                    data-toggle="tooltip" 
                                    data-placement="top" 
                                    title="Profile detail"
                                    to={`/profile-detail/${profile.id}`}
                                >
                                    <i className="ri-search-eye-fill align-bottom me-2 text-muted"></i>
                                </Link>
                            </td>
                        </tr>
                    )
                }) }
            </tbody>
        </table>
    )
}

export default ProfilesList