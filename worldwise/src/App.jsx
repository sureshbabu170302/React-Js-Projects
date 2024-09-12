import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import HomePage from "./pages/HomePage";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import CityList from "./Components/CityList";

export default function App() {
  return (  
    <BrowserRouter>      
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="product" element={<Product/>}/>
        <Route path="pricing" element={<Pricing/>} />
        <Route path="login" element={<Login/>} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<CityList/>}/>
          <Route path="cities" element={<CityList/>} />
          <Route path="countries" element={<p>Countries</p>} />
          <Route path="form" element={<p>Form</p>} />
        </Route>
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}
