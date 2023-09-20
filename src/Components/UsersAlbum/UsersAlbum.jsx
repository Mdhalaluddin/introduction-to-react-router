import { useLoaderData, useNavigate } from 'react-router-dom'
const UsersAlbum = () => {
    const album = useLoaderData()
    const navigate = useNavigate();
    const handleGoBackBtn = ()=>{
        navigate(-1)

    }
    const {id, title } = album;
    return (
        <div>
            <h2>{title}</h2>
            <button onClick={handleGoBackBtn}>Go Back</button>
        </div>
    );
};

export default UsersAlbum;