import axios from "axios"
import { Base_URL } from "../utils/constants"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addRequest } from "../utils/requestsSlice"
import RequestCard from "./RequestCard"


const Requests = () => {
    const dispatch = useDispatch()
    const requests = useSelector((store) => store.requests) || []
    console.log(requests)
    const fetchRequests = async () => {
        try {

            const res = await axios(Base_URL + "user/recieved", { withCredentials: true })
            console.log(res.data)
            dispatch(addRequest(res?.data?.connection))
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchRequests()
    }, [])
    return (
        <>

            {requests.map((request)=> < RequestCard  data={request} /> )}
           
        </>
    )
}

export default Requests
