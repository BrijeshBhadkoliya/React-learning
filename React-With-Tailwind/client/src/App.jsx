import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Components/AddCard";
import ViewCard from "./Components/ViewCard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/addcard" element={<Form />} />
        <Route path="/viewcard" element={<ViewCard />} />
        {/* Optional: redirect root path to /viewcard */}
        <Route path="*" element={<ViewCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
