import { useNavigate, useParams } from "react-router-dom";

const Track = () => {

    const navigate = useNavigate();

    const { uid } = useParams();

    navigate(`/track-product/${uid}`);


}

export default Track