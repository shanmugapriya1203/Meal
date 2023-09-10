

import Navbar from './components/Navbar';
import Home from './Pages/Home';
import { Outlet, Routes,Route } from 'react-router-dom';
import Footer from './components/Footer';
import About from './components/About';
import RecipeDetail from './Pages/RecipeDetail';
function Layout(){
  return(
    <>
     <Navbar/>
    <Outlet/>
    <Footer/>
    </>
   

  )
}
function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />

          </Route>
      </Routes>
    
    </div>
  );
}

export default App;
