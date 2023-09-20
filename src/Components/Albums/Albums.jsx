import {useLoaderData} from 'react-router-dom'
import Album from '../Album/Album';
const Albums = () => {
    const albums = useLoaderData();
    // console.log(albums);
    return (
        <div>
            <h2>Albums</h2>
           <div className='users'>
           {
                albums.map(album =><Album key={album.id} album={album}></Album>)
            }
           </div>
        </div>
    );
};

export default Albums;