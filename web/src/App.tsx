import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Router from "./Router";
import '@/assets/fonts/fonts.css';
import { initI18n } from "@/i18n";
import { useUser } from "./hooks/use-user";
import './App.css'
initI18n();
const App = () => {
  const { user } = useUser()
  return <RouterProvider router={createBrowserRouter(Router(user))} />;
};

export default App;
