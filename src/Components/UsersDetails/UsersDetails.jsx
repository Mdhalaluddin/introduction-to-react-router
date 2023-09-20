import { useLoaderData, useNavigate } from 'react-router-dom'
const UsersDetails = () => {
    const navigate = useNavigate();
    const user  = useLoaderData();
    const {name, website} = user;
    const handleGoBackBtn = ()=>{
        navigate(-1);
    }
    return (
        <div>
            <h2>Details about user: {name}</h2>
            <h4>website: {website}</h4>
            <button onClick={handleGoBackBtn}>Go Back</button>
        </div>
    );
};

export default UsersDetails;