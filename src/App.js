import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import LandingPage from "./LandingPage";
import ProductListing from "./ProductListing";
import CartPage from "./CartPage"; // Import Cart Page
import Navbar from "./NavBar"; // Import Navbar

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
