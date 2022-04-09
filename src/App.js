import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import QuizGamePage from './Pages/QuizGamePage/QuizGamePage';
import HomePage from './Pages/HomePage/HomePage';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import UserProfile from './Pages/Userprofile/UserProfile';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import AllQuizPage from './Pages/AllQuizPage/AllQuizPage';
import { useEffect } from 'react';
import { useAuthContext } from './Context/AuthContext/AuthContext';


function App() {

  useEffect(() => {
    // const word = db.ref('/');
    // // word.orderByChild('category').equalTo(1).on('value', (data)=>{
    // //   console.log(data.val())
    // // })

    // word.on('value', (data)=>{
    //   console.log(data.val())
    // })

  }, [])

  const { user } = useAuthContext()

  console.log(user)
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/quizgame/:id' element={<QuizGamePage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/profile' element={<UserProfile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/explore' element={<AllQuizPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
