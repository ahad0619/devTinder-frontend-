import axios from "axios"
import { Base_URL } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { removeRequest } from "../utils/requestsSlice"


const RequestCard = ({ data }) => {
    const id = data._id
    const { firstName, lastName, age, gender, photoUrl, } = data.fromUserId
    const dispatch = useDispatch()
    const reviewRequest = async (status, id) => {
        try {
            const res = await axios.post(Base_URL + "/request/review/" + status + "/" + id, {}, { withCredentials: true })
            dispatch(removeRequest(id))
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <>

          
            <div className="flex justify-center pb-4 ">
                <div className="card bg-neutral text-neutral-content w-96 flex items-center p-4 gap-4">
                    <div className="border w-18 h-18 flex  justify-center rounded-full overflow-hidden bg-gray-700">
                        <img
                            src={photoUrl}
                            alt="Profile picture"
                            className="object-cover w-full h-full"
                        />
                    </div>

                    <div className="card-body p-0 text-center items-center">
                        <div className=" gap-4">
                            <h2 className="card-title align-text-top">{firstName} {lastName} </h2>
                            <p className="font-extralight">{age} | {gender}</p>
                        </div>
                        <p>About</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-primary"
                                onClick={() => reviewRequest("accepted", id)}>Accept</button>
                            <button className="btn btn-secondary"
                                onClick={() => reviewRequest("rejected", id)}>Deny</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default RequestCard
