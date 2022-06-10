import React from "react";
import { Routes,Route,BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

//styles 
import {light} from "./styles/themes/light";
import GlobaStyle from './styles/global';

//Components
const Loading = React.lazy(()=>import('./components/Loading/Loading'));

//Pages
const HeadBar = React.lazy(()=>import('./components/HeadBar/Headbar'));
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
    <ThemeProvider theme={light}>
      <GlobaStyle />
      <React.Suspense fallback={<Loading/>}>
        <HeadBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route element={<Shop/>} path="/shop"/>
          <Route element={<Products/>} path="/products"/>
          <Route element={<Cart/>} path="/cart"/>
          <Route element={<Account/>} path="/account"/>
          <Route element={<Blog/>} path="/blog"/>
          <Route element={<About/>} path="/about"/>
          <Route element={<Contact/>} path="/contact"/>
          <Route element={<Faq/>} path="/faq"/>
        </Routes>
      </React.Suspense>
    </ThemeProvider>
  );
}

export default App;