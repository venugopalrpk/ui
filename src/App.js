import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import Help from "./components/Help";
import LearnMore from "./components/LearnMore";
import FrequentlyAskedQuestions from "./components/FrequentlyAskedQuestions";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import DashBoard from "./components/DashBoard";

import Setup from "./components/Setup/Setup";
import SetupEntry from "./components/MonthlyEntry/SetupEntry";
import Selection from "./components/MonthlyEntry/Selection";
import MonthlyEntry from "./components/MonthlyEntry/MonthlyEntry";
import Generated from "./components/MonthlyEntry/Generated";
import SetupSource from "./components/SetupWorks/SetupSource";
import InputGenerated from "./components/Setup/InputGenerated";
import MonthNavigation from "./components/MonthlyEntry/MonthNavigation";
import Output from "./components/Output/Output";
import Customize from "./components/Output/Customize";
import Numerator from "./components/Output/Numerator";
import Download from "./components/Output/Download";
import Down from "./components/Output/Down";
import Milestone from "./components/Output/Milestone";
import Benchmark from "./components/Output/Benchmark";
import AreYouSure from "./components/Output/AreYouSure";
import RemsLowa from "./components/Output/RemsLowa";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route index path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/footer" element={<Footer />} />
    //     <Route path="/ContactUs" element={<ContactUs />} />
    //     <Route path="/Privacy" element={<Privacy />} />
    //     <Route path="/Terms" element={<Terms />} />
    //     <Route path="/Help" element={<Help />} />
    //     <Route path="/LearnMore" element={<LearnMore />} />
    //     <Route
    //       path="/FrequentlyAskedQuestions"
    //       element={<FrequentlyAskedQuestions />}
    //     />
    //     <Route path="/Login" element={<Login />} />
    //     <Route path="/Navbar" element={<Navbar />} />
    //     <Route path="/DashBoard" element={<DashBoard />} />
    //     <Route path="/Setup" element={<Setup />} />
    //     <Route path="/SetupEntry" element={<SetupEntry />} />
    //     <Route path="/Selection" element={<Selection />} />
    //     <Route path="/MonthlyEntry" element={<MonthlyEntry />} />

    //     <Route path="/Generated" element={<Generated />} />
    //     <Route path="/SetupSource" element={<SetupSource />} />
    //     <Route path="/InputGenerated" element={<InputGenerated />} />
    //     <Route path="/MonthNavigation" element={<MonthNavigation />} />
    //     <Route path="/Output" element={<Output />} />
    //     <Route path="/customize" element={<Customize />} />
    //     <Route path="/Numerator" element={<Numerator />} />
    //     <Route path="/Download" element={<Download />} />
    //     <Route path="/Down" element={<Down />} />
    //     <Route path="/Milestone" element={<Milestone />} />
    //     <Route path="/Benchmark" element={<Benchmark />} />
    //     <Route path="/AreYouSure" element={<AreYouSure />} />
    //     <Route path="/RemsLowa" element={<RemsLowa />} />
    //   </Routes>
    // </BrowserRouter>
    // <DashBoard />
    // <Setup />
    // <MonthlyEntry /> not done
    // <SetupEntry />not done
    // <Output />
    // <Numerator />
    // <Milestone />
    // <Benchmark />
    // <Customize />
    // <Download />
    <AreYouSure />
  );
}

export default App;
