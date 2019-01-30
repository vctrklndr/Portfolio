import React from "react";
import "./Assets/Styles/app.scss";
import Blob from "./Blob";
import Header from "./Header";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Blob />
      </div>
    );
  }
}

export default App;
