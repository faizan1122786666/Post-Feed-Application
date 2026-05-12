import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import CreatePost from './pages/CreatePost'
import Feed from './pages/Feed'
import Home from './pages/Home'
import MarketingPage from './pages/MarketingPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/features' element={<MarketingPage pathname='/features' />} />
        <Route path='/pricing' element={<MarketingPage pathname='/pricing' />} />
        <Route path='/blog' element={<MarketingPage pathname='/blog' />} />
        <Route path='/contact' element={<MarketingPage pathname='/contact' />} />
        <Route path='/create-post' element={<CreatePost />} />
        <Route path='/feed' element={<Feed />} />
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
