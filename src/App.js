import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import HomePage from './Pages/HomePage/HomePage';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;
