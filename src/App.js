import { useRoutes } from "react-router-dom";
import routes from "./routes/routes";
import TopBar from "./components/TopBar/TopBar";
import './App.css'
import SideBar from "./components/sidebar/SideBar";

function App() {
  const router = useRoutes(routes)

  return (
    <>
      <TopBar />
      <div className="container">
          <SideBar />
          {router}
      </div>    
    </>
  );
}

export default App;
