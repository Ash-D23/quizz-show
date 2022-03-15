import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import QuizGamePage from './Pages/QuizGamePage/QuizGamePage'
import SingleCategory from './Pages/Singlecategory/SingleCategory';
import CategoryPage from './Pages/CategoryPage/CategoryPage';
import HomePage from './Pages/HomePage/HomePage';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';

import './App.css'


function App() {
  return (
    <div>
      <Navbar />
      <QuizGamePage />
      <Footer />
    </div>
  );
}

export default App;
