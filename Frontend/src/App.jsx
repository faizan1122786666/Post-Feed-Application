import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import CreatePost from './pages/CreatePost'
import Feed from './pages/Feed'

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/feed' />} />
        <Route path='/create-post' element={<CreatePost/>} />
        <Route path='/feed' element={<Feed/>} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="colored"
      />
    </BrowserRouter>
  )
}

export default App
