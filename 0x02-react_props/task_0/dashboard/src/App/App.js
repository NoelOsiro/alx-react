import React from "react";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div data-testid="app">
        <Notifications />
        <div className="App">
          <Header />
          <Login />
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
