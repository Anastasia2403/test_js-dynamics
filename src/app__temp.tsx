import { Outlet } from "react-router-dom";
import "./app.css";
import { Header } from "./components/header";

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
};
