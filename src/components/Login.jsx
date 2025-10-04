import { useState } from "react"
import axios from 'axios'
import { useDispatch } from "react-redux"
import { addUser } from "../utils/userSlice"
import { useNavigate } from "react-router-dom"
import {Base_URL} from '../utils/constants'



const Login = () => {
  const [errorMessage, setErrorMessage] = useState("")
  const navigate = useNavigate()
  const [useEmail, setUseEmail] = useState("hiba@gmail.com")
  const [usePassword, setUsePassword] = useState("Hiba@1234")
  const dispatch = useDispatch()

  const handleClick = async () => {
    try {
      const response = await axios.post(Base_URL+"login", {
       emailId: useEmail,
       password : usePassword
      },{
        withCredentials : true
        
      })
      console.log("Login success");
      dispatch(addUser(response.data))
      navigate("/")
    } catch (err) {
      // console.log(err?.response?.data)
      setErrorMessage(err?.response?.data || "Something went Wrong!")
    }
  }
  return (
    <div className="ml-96 mt-36 pl-44">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Login</legend>

        <label className="label">Email</label>
        <input
          type="email"
          className="input"
          placeholder="Email"
          value={useEmail}
          onChange={((e) => { setUseEmail(e.target.value) })}
        />

        <label
          className="label">Password
        </label>
        <input
          type="password"
          className="input"
          placeholder="Password"
          value={usePassword}
          onChange={((e) => { setUsePassword(e.target.value) })}
        />
         <p className="mt-2 text-red-400">{errorMessage}</p>
        <button className="btn btn-neutral mt-4" onClick={handleClick}>Login</button>
      </fieldset>
    </div>
  )
}

export default Login
