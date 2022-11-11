import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2 className="text-blue-600">Check tailwind</h2>
      <div className="avatar online">
        <div className="w-24 rounded-full">
          <img src="https://placeimg.com/192/192/people" />
        </div>
      </div>
      <div className="avatar offline">
        <div className="w-24 rounded-full">
          <img src="https://placeimg.com/192/192/people" />
        </div>
      </div>
    </div>
  );
}

export default App;
