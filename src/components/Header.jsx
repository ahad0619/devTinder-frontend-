import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { Base_URL } from "../utils/constants"
import { removeUser } from "../utils/userSlice"


const Header = () => {
  const user = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClick = async () => {
    try {
      await axios.post(Base_URL + "logout", {},
        { withCredentials: true })
      dispatch(removeUser())
      return navigate("/login")
    } catch (err) {
      console.log(err)
    }

  }

  return (
    <div>
      <div className="navbar bg-base-400 shadow-lg">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">devTinder</a>
        </div>
        <div className="flex gap-2">

          <div className="dropdown dropdown-end">
            {user && <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mr-6">
              <div className="w-10 rounded-full ">
                <img

                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li><a>Settings</a></li>
              <li>
                <a onClick={handleClick}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
