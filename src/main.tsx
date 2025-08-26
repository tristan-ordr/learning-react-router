import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";

function App() {
    return (
        <BrowserRouter>
            <header>
                <Link to="/">#VANLIFE</Link>
                <nav>
                    <Link to="/about">About</Link>
                </nav>
            </header>


            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    )
}


const root: HTMLElement = document.getElementById('root')!

ReactDOM.createRoot(root).render(
    <App />
);