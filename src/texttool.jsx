import Navbar from "./components/Navbar";
import "./texttool.css";
import Textform from "./components/Textform.jsx";

function Texttool() {
  return (
    <>
      <Navbar title="Text Tool" />
      <div className="container">
        <Textform />
      </div>
    </>
  );
}

export default Texttool;
