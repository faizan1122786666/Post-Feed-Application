import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom'
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
    </BrowserRouter>
  )
}

export default App
