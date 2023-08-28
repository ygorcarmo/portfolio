import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <Layout>
      <Routes>
        {AppRoutes.map((route) => (
          <Route key={route.id} {...route} />
        ))}
      </Routes>
    </Layout>
  );
}

export default App;
