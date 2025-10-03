import { useState } from "react"
import axios from 'axios'


const Login = () => {
  const [useEmail, setUseEmail] = useState("")
  const [usePassword, setUsePassword] = useState("")

  const handleClick = async () => {
    try {
      const response = await axios.post("http://localhost:3333/login", {
       emailId: useEmail,
       password : usePassword
      },{
        withCredentials : true
      })
      console.log("Login success:", response.data);
    } catch (err) {
      console.log(err)
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

        <button className="btn btn-neutral mt-4" onClick={handleClick}>Login</button>
      </fieldset>
    </div>
  )
}

export default Login
