import axios from "axios"
import ConnectionCard from "./ConnectionCard"
import { Base_URL } from "../utils/constants"
import { useEffect } from "react"
import {useDispatch, useSelector} from 'react-redux'
import {addConnection} from '../utils/connectionSlice'

const Connection = () => {
    const dispatch = useDispatch()
    const connectionsData = useSelector((store)=>store.connection) || []
    const connections = async () => {
        try {
            const res = await axios.get(Base_URL + "user/connections", { withCredentials: true })
            // console.log(res.data)
            dispatch(addConnection(res.data))
        } catch (err) {
            console.log(err.message)
        }
    }
    useEffect(() => {
        connections()
    }, [])
    return (
        <>
        {connectionsData.map((connection,index)=>{return <ConnectionCard key={index} data={connection.fromUserId} /> 
        })}
         
        </>
    )
}

export default Connection
