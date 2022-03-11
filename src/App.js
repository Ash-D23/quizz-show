import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import QuizRules from './Components/QuizRules/QuizRules';
import QuizResults from './Components/QuizResults/QuizResults'
import QuizQuestion from './Components/QuizQuestion.js/QuizQuestion';
import QuizGame from './Components/QuizGame/QuizGame';
import './App.css'


function App() {
  return (
    <div>
      <Navbar />
      <QuizGame />
      <Footer />
    </div>
  );
}

export default App;
