import Body from './components/Body'
import Login from './components/Login'
import Profile from './components/Profile'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'
import Feed from './components/Feed'
import Requests from './components/Requests'
import Connection from './components/Connection'
import Chat from './components/Chat'

function App() {


  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename='/'>
          <Routes>
            <Route path='/' element={<Body />} >
              <Route path='/' element={<Feed />} />
              <Route path='/login' element={<Login />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/requests' element={<Requests />} />
              <Route path='/connections' element={<Connection />} />
              <Route path='/chat/:id' element={<Chat/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>

    </>
  )
}


export default App
