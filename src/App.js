import logo from "./logo.svg";
import "./App.css";
import { MichaelNguyen } from "./components/MichaelNguyen/MichaelNguyen";
import { AdamSchlicht } from "./components/AdamSchlicht/AdamSchlicht";
import { EthanMoliver } from "./components/EthanMoliver/EthanMoliver";
import { DanielChegwidden } from "./components/DanielChegwidden/DanielChegwidden";
import { RuhaabSheikh } from "./components/RuhaabSheikh/RuhaabSheikh";
import { NauvooPerez } from "./components/NauvooPerez/NauvooPerez";
import { OllyWilson } from "./components/OllyWilson/OllyWilson";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Name | Mantel Brand | Favourite Food | Last show watched</p>
        <MichaelNguyen />
        <AdamSchlicht />
        <EthanMoliver />
        <DanielChegwidden />
        <RuhaabSheikh />
        <NauvooPerez />
        <OllyWilson />
        <h1>hello world</h1>
      </header>
    </div>
  );
}

export default App;
