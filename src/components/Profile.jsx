import { useSelector } from "react-redux"
import EditProfile from "./EditProfile"



const Profile = () => {
     const user = useSelector((store) => store.user) 
     if(!user) return null
  return (
    <div className="flex">
      <EditProfile data={user}/>
      
    </div>
  )
}

export default Profile
