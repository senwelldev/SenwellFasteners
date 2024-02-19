import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import {
  NavbarComponent,
  Footer,
  Home,
  Industries,
  Products,
  About,
  Contact,
  ProductCategory,
  ProductView,
  ErrorPage,
  Login,
  Blog,
  Blog1,
  Blog2,
  Blog3,
} from "./AllExport";
import { useEffect } from "react";
import NewsForm from "./components/Footer/news-form/NewsForm";
import { ref, get } from "firebase/database";
import { data } from "./FirebaseConfig";
import { useDispatch } from "react-redux";
import { setCategoryData, setProductsData } from "./Actions";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const categoryRef = ref(data, "category");
      try {
        const categorySnapshot = await get(categoryRef);
        const categoryItems = [];
        categorySnapshot.forEach((category) => {
          const categoryDetails = category.val();
          categoryItems.push(categoryDetails);
        });
        

        const productsRef = ref(data, "products");
        const productsSnapshot = await get(productsRef);
        const productsItems = [];
        productsSnapshot.forEach((product) => {
          const productDetails = product.val();
          productsItems.push(productDetails);
        });
        dispatch(setCategoryData(categoryItems));
        dispatch(setProductsData(productsItems));
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />

        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/productCategory/:id" element={<ProductCategory />} />
          <Route
            path="/productCategory/:id/:typeId"
            element={<ProductView />}
          />
          <Route path="/newsForm" element={<NewsForm />} />
          <Route path="/blogs" element={<Blog/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/blogs/blog/:blogId" element={<Blog1/>}/>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
