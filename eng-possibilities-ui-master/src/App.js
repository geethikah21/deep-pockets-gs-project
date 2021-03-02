import { Container } from "react-bootstrap";

import NavBar from "./components/NavBar";
import ForecasterHome from './pages/Forecaster'
import DataTable from './components/Table/datatable'
import AllocationContext from './AllocationContext'
import "./App.css";

function App() {
  return (
    <div>
      <Container fluid className="App">
        <NavBar />
        <Container fluid>
        <ForecasterHome/>
        </Container>
        <DataTable/>
      </Container>
    </div>
  );
}

export default App;
