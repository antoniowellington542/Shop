import React from "react";
import { Routes,Route} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

//Components
const Loading = React.lazy(()=>import('./components/Loading/Loading'));

//Pages
const HeadBar = React.lazy(()=>import('./components/HeadBar/HeadBar'));
const Home = React.lazy(()=>import('./pages/Home/Home'));
const Shop = React.lazy(()=>import('./pages/Shop/Shop'));
const Products = React.lazy(()=>import('./pages/Products/Products'));
const Cart = React.lazy(()=>import('./pages/Cart/Cart'));
const Account = React.lazy(()=>import('./pages/Account/Account'));
const Blog = React.lazy(()=>import('./pages/Blog/Blog'));
const About = React.lazy(()=>import('./pages/About/About'));
const Contact = React.lazy(()=>import('./pages/Contact/Contact'));
const Faq = React.lazy(()=>import('./pages/Faq/Faq'));

const App = ()=> {
  return (
    <React.Suspense fallback={<Loading/>}>
      <HeadBar/>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/account" element={<Account/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/faq" element={<Faq/>} />
      </Routes>
    </React.Suspense>
  );
}

export default App;