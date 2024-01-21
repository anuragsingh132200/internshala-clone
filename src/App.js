import "./App.css";
import React from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
function App() {
  const [description, setDescription] = React.useState("");
  const updatedescription = (event) => {
    setDescription(event.target.value);
  };
  const [joborintern, setJoborintern] = React.useState("");
  const updatejoborintern = (event) => {
    setJoborintern(event.target.value);
  };
  const [stipend, setStipend] = React.useState("");
  const updatestipend = (event) => {
    setStipend(event.target.value);
  };
  const index = localStorage.length;
  const addlocal = () => {
    localStorage.setItem(index+1,
      JSON.stringify({ description, joborintern, stipend })
    );
  };
  const intern = new Array(localStorage.length + 1);
  for (let i = 0; i < localStorage.length; i++) {
    intern[i] = JSON.parse(localStorage.getItem(i + 1));
  }
  return (
    <div>
      <Header />
      <form className="addintern">
        <input
          type="text"
          className="interndescription"
          placeholder="Description of Internship"
          onChange={updatedescription}
        />
        <input
          type="type"
          className="joborintern"
          placeholder="Job or Internship"
          onChange={updatejoborintern}
        />
        <input
          type="text"
          className="stipend"
          placeholder="Stipend"
          onChange={updatestipend}
        />
        <button type="submit" className="submit" onClick={addlocal}>
          Upload
        </button>
      </form>

      {intern.map((intern) => (
        <div className="card">
          <p className="description">{intern.description}</p>
          <p className="joborintern">{intern.joborintern}</p>
          <p className="stipend">${intern.stipend}</p>
        </div>
      ))}
      <Footer />
    </div>
  );
}

export default App;
