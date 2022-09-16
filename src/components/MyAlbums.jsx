import { useSelector } from "react-redux"
import MySingleAlbum from "./MySingleAlbum"

const albumsContent = useSelector((state) => state.album.list)



const MyAlbums = () => {
    return (
        <div>
<MySingleAlbum/>
        </div>
    )
}


export default MyAlbums