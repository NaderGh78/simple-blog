import "./index.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Write from "./pages/write/Write";
import Homepage from "./pages/homepage/Homepage";
import Single from "./pages/single/Single";
import Settings from "./pages/settings/Settings";
import BottomSearch from "./components/bottomSearh/BottomSearch";
import { useContext } from "react";
import { SearchContext } from "../src/context/searchBottomContext";
import Search from "./pages/search/Search";
import Author from "./pages/author/Author";

/*======================================*/
/*======================================*/
/*======================================*/

function App() {
  //showBarIcon mean when we resize the window show icon and BottomSearch comp
  const { showBarIcon } = useContext(SearchContext);
  return (
    <HashRouter>
      <Topbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/write" element={<Write />} />
        <Route path="/author/:id/post/:postid" element={<Single />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/search" element={<Search />} />
        <Route path="/author/:id" element={<Author />} />
      </Routes>
      {/* if showBarIcon is true that mean we resize the window,and show the BottomSearch comp */}
      {showBarIcon && <BottomSearch />}
    </HashRouter>
  );
}

export default App;
