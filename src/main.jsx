import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Navbar} from "./components/Navbar.jsx";
import {MacPage} from "./pages/MacPage.jsx";
import {IpadPage} from "./pages/IpadPage.jsx";
import {IphonePage} from "./pages/IphonePage.jsx";
import {WatchPage} from "./pages/WatchPage.jsx";
import {VisionPage} from "./pages/VisionPage.jsx";
import {TvHomePage} from "./pages/Tv-HomePage.jsx";
import {AirPodsPage} from "./pages/AirPodsPage.jsx";
import {EntertainmentPage} from "./pages/EntertainmentPage.jsx";
import {AccessoriesPage} from "./pages/AccessoriesPage.jsx";
import {SupportPage} from "./pages/SupportPage.jsx";
import {StorePage} from "./pages/StorePage.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
    <Navbar />
   <Routes>
       <Route exact path="/" element={<App />} />
       <Route path="/store" element={<StorePage />} />
       <Route path="/mac" element={<MacPage />} />
       <Route path="/ipad" element={<IpadPage />} />
       <Route path="/iphone" element={<IphonePage />} />
       <Route path="/watch" element={<WatchPage />} />
       <Route path="/vision" element={<VisionPage />} />
       <Route path="/airpods" element={<AirPodsPage />} />
       <Route path="/tv-home" element={<TvHomePage />} />
       <Route path="/entertainment" element={<EntertainmentPage />} />
       <Route path="/accessories" element={<AccessoriesPage />} />
       <Route path="/support" element={<SupportPage />} />

   </Routes>
   </BrowserRouter>
  </React.StrictMode>,
)
