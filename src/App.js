
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import LandingPage from './Components/LandingPage';
import SignInPage from './Components/SigninPage';
import SignUpPage from './Components/SignupPage';
import Profile from './Components/Profile';


function App() {
  return (
    <>
    <BrowserRouter>
    <div className="App">
      {/* <LandingPage/> */}
      {/* <SignInPage/> */}
      {/* <SignUpPage/> */}
      
    </div>
    <Routes>
    <Route exact path='/' element={<LandingPage/>}/>
    <Route exact path='/SignUpPage' element={<SignUpPage/>}/>
    <Route exact path='/SigninPage' element={<SignInPage/>}/>
    <Route exact path='/Profile' element={<Profile/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
