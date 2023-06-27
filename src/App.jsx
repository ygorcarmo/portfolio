import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import { NavTab } from "./components";

function App() {
  return (
    <>
      <NavTab />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
