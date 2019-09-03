import React from "react";
import authors from "./data";

//Components
import Sidebar from "./Sidebar";
import AuthorList from "./AuthorList";

function App() {
  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>

        <AuthorList authors={authors} />
      </div>
    </div>
  );
}

export default App;
