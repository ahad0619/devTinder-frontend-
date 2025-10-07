
import axios from 'axios';
import { Base_URL, defaultPhoto } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { removeFeed } from '../utils/feedSlice';
const Card = ({ data, className = "" }) => {
    const dispatch = useDispatch()
    const { firstName, gender, age, about, lastName, photoUrl, _id } = data

    const fetchData = async (status, _id) => {
        const res = await axios.post(Base_URL + "request/" + status + "/" + _id, {}, { withCredentials: true })
        console.log(_id)
        dispatch(removeFeed(_id))
    }

    return (
        <div className={`w-[30vw] h-[50vh] ml-[35vw] mt-[10vh] ${className}`}>
            <div className="card bg-base-300 w-96 shadow-sm">
                <figure>
                    <img
                        className="h-40"
                        src={photoUrl || defaultPhoto}
                        alt="User Photo" />
                </figure>
                <div className="card-body h-64">
                    <div className="flex justify-between">
                        <h2 className="card-title">{firstName}  {lastName ? lastName : ""}</h2>
                        <span>{gender ? gender : "Gender"} ▪ {age ? age : ""}  Years</span>
                    </div>

                    <p className="mt-4 ">{about}</p>

                    <div className="card-actions flex justify-center gap-5">
                        <button className="btn btn-secondary" onClick={() => { fetchData("ignored", _id) }}>Ignore</button>
                        <button className="btn btn-primary" onClick={() => { fetchData("interested", _id) }}>Interested</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
