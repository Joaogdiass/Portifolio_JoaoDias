import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import FixedControls from "./components/FixedControls";
function App() {
    return (_jsxs("div", { children: [_jsx(Header, {}), _jsx(Hero, {}), _jsx(FixedControls, {}), _jsx(About, {}), _jsx(Projects, {}), _jsx(Skills, {}), _jsx(Contact, {}), _jsx(Footer, {})] }));
}
export default App;
