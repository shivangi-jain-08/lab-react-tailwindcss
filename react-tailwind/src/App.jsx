import React from "react";
import Alert from "./components/Alert";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Alert />
      <Card />
      <Footer />
    </div>
  );
}

export default App;