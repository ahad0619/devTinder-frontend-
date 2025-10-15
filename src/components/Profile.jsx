import { useSelector } from "react-redux"
import EditProfile from "./EditProfile"
import Shimmer from "./Shimmer"



const Profile = () => {
  const user = useSelector((store) => store.user)
  console.log(user)
  if (!user) {
    return <Shimmer />
  }
  return (
    <div className="flex">
      <EditProfile data={user} />

    </div>
  )
}

export default Profile
