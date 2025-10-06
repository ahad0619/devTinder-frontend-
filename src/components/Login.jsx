import { useState } from "react"
import axios from 'axios'
import { useDispatch } from "react-redux"
import { addUser } from "../utils/userSlice"
import { useNavigate } from "react-router-dom"
import { Base_URL } from '../utils/constants'



const Login = () => {
  const [errorMessage, setErrorMessage] = useState("")
  const navigate = useNavigate()
  const [useEmail, setUseEmail] = useState("")
  const [usePassword, setUsePassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [isLogin, setIsLogin] = useState(true)

  const dispatch = useDispatch()

  const handleClick = async () => {
    try {
      const response = await axios.post(Base_URL + "login", {
        emailId: useEmail,
        password: usePassword
      }, {
        withCredentials: true

      })
      console.log("Login success");
      dispatch(addUser(response.data))
      navigate("/")
    } catch (err) {

      setErrorMessage(err?.response?.data || "Something went Wrong!")
    }
  }

  const handleSignUp = async () => {
    const res = await axios.post(Base_URL + "signup",
      {
        firstName: firstName,
        lastName: lastName,
        emailId: useEmail,
        password: usePassword
      },
      { withCredentials: true })
    console.log("Sign up successful", res.data)
    navigate("/")
    dispatch(addUser(res.data))
  }
  return (
    <>
      <div className="ml-96 mt-20 pl-44">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          {isLogin && <legend className="fieldset-legend">Login</legend>}
          {!isLogin && <legend className="fieldset-legend">Sign Up</legend>}
          {!isLogin && <> <label className="label">First Name</label>
            <input
              type="text"
              className="input"
              placeholder="First Name"
              value={firstName}
              onChange={((e) => { setFirstName(e.target.value) })}
            />
          </>}

          {!isLogin && <> <label className="label">Last Name</label>
            <input
              type="text"
              className="input"
              placeholder="Last Name"
              value={lastName}
              onChange={((e) => { setLastName(e.target.value) })}
            /></>}
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
          {isLogin && <button className="btn btn-success mt-4" onClick={handleClick}>Login</button>}
          {isLogin && <div className="flex gap-1 mt-3">
            <p>Not a user?</p>
            <p className="cursor-pointer" onClick={() => { setIsLogin(!isLogin) }}>Sign Up</p>
          </div>
          }
          {!isLogin && <button className="btn btn-warning mt-4" onClick={handleSignUp} >SignUp</button>}
          {!isLogin && <div className="flex gap-1 mt-3">
            <p>Already a user?</p>
            <p className="cursor-pointer" onClick={() => { setIsLogin(!isLogin) }}>Sign in now</p>
          </div>
          }
        </fieldset>
      </div>
    </>
  )
}

export default Login
