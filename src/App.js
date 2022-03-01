import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import SingleCategory from './Pages/Singlecategory/SingleCategory';
import CategoryPage from './Pages/CategoryPage/CategoryPage';
import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <SingleCategory />
      <Footer />
    </div>
  );
}

export default App;
