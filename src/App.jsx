
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { AuthContextProvider } from './context/AuthContext'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Account from './pages/Account'
// import Signout from './pages/Signout'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  
return (
  <>
  
<AuthContextProvider>
  <Navbar/>
  <Routes>
      <Route path='/' element={<Home/>} />
      {/* <Route path='/account' element={ <ProtectedRoute>
          <Account/>
      </ProtectedRoute> }  /> */}
      <Route path='/account' element={<Account/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup />} />
  </Routes>
</AuthContextProvider>


  </>
)
 
}

export default App
