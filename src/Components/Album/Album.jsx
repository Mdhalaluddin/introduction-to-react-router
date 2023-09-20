import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const Album = ({ album }) => {
    const { id, title, userId } = album;
    const navigate = useNavigate();
    const albumStyle = {
        border: '2px solid yellow',
        padding: '5px',
        borderRadius: '20px',
    };
    

    const handleShowDetailsBtn = () => {
        navigate(`/album/${id}`)
    }
    return (
        <div style={albumStyle}>
            <h2>only Album: {album.length}</h2>
            <h4>{title}</h4>
            <h1>User Id: {userId}</h1>
            <Link to={`/album/${id}`}>Show btn</Link>
            <button onClick={handleShowDetailsBtn}>show all btn</button>
        </div>
    );
};

export default Album;