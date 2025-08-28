import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Mercury from "./pages/Mercury";
import Venus from "./pages/Venus";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Mercury />} />
        <Route path="/venus" element={<Venus />} />
      </Route>
    </Routes>
  );
}

export default App;
