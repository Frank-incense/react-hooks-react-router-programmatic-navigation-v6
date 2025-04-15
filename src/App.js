import { Navigate, Outlet, useNavigate} from "react-router-dom";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate()

  const login = () =>{
    setIsLoggedIn(true);
  }
  const logout = () =>{
    console.log("Im out")
    setIsLoggedIn(false);
  };

  useEffect(() =>{
    if (isLoggedIn) {
        // navigates to Home route if user is logged in
      navigate("/");
    } else {
        // navigates to Login route if user is logged out
      navigate("/login");
    };
  }, [isLoggedIn]);

  return (
    <div className="app">
      { isLoggedIn? <NavBar context={logout}/> : <Navigate to="/login" />
      }
      <Outlet context={login}/>
    </div>
  );
}

export default App;
