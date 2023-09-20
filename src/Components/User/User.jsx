import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const User = ({ user }) => {
    const navigate = useNavigate();
    const { id, name, email, phone } = user;
    const userStyle = {
        border: '2px solid yellow',
        padding: '5px',
        borderRadius: '20px',
    }
    const handleShowBtn = ()=>{
        navigate(`/user/${id}`)
    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <button onClick={handleShowBtn}>Show all details</button>
        </div>
    );
};

export default User;