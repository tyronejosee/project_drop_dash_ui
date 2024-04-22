import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from "./components/layout/Layout";
import { HomePage } from "./pages/HomePage";
import { RestaurantDetailPage } from "./pages/RestaurantDetailPage";

// import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/restaurant" element={<RestaurantDetailPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
