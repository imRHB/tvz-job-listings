import './App.css';
import JobProvider from "./contexts/JobProvider";
import Home from "./pages/Landing/Home";

function App() {
  return (
    <JobProvider>
      <div className="App">
        <Home />
      </div>
    </JobProvider>
  );
}

export default App;
