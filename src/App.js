import { BrowserRouter, Switch,Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Contents/AuthProvider';
import Booking from './Pages/Booking/Booking/Booking';
import Contact from './Pages/Contact/Contact';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import Service from './Pages/Home/Service/Service';
import Services from './Pages/Home/Services/Services';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Regester from './Pages/Login/Regester/Regester';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';


function App() {
  return (
    <div className="App">
       <AuthProvider>
       <BrowserRouter>
      <Header></Header>
        <Switch>
        <Route  exact path="/">
             <Home></Home>
           </Route>
           <Route  exact path="/home">
             <Home></Home>
           </Route>
           <PrivateRoute path="/booking/:serviceId">

           <Booking></Booking>

           </PrivateRoute>
             <Route  path="/services">
              <Services></Services>

             </Route>
           <Route path="/login">
               <Login></Login>
             </Route>

             <Route path="/contact">
                <Contact></Contact>
             </Route>
             <Route path="/regestar">
               <Regester></Regester>
             </Route>


           <Route path="*">
             
             <NotFound></NotFound>
           </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
       </AuthProvider>
    </div>
  );
}

export default App;
