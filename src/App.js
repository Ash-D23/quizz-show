import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import QuizGamePage from './Pages/QuizGamePage/QuizGamePage';
import SingleCategory from './Pages/Singlecategory/SingleCategory';
import CategoryPage from './Pages/CategoryPage/CategoryPage';
import HomePage from './Pages/HomePage/HomePage';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import UserProfile from './Pages/Userprofile/UserProfile'
import { Routes, Route} from 'react-router-dom';

import './App.css'


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      <Routes>
        <Route path='/category' element={<CategoryPage/>} />
      </Routes>
      <Routes>
        <Route path='/category/:id' element={<SingleCategory />} />
      </Routes>
      <Routes>
        <Route path='/quizgame/:id' element={<QuizGamePage />} />
      </Routes>
      <Routes>
        <Route path='/profile' element={<UserProfile />} />
      </Routes>
      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
