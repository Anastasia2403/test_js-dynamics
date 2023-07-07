import { Outlet } from "react-router-dom";
import "./index.css";
import { Header } from "./components/header";

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
};
