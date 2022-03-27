import { Link } from "react-router-dom";

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'grey' }}>
      <Link to="/matches">Check out some crystal league match data!</Link>
    </div>
  );
}

export default App;
