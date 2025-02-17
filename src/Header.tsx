import NavigationBar from "./NavigationBar";
import "./index.css";

const Header = () => {
  return (
    <div className="flex-container">
      <img src="/logo.png" alt="This is a logo of a webpage" />
      <NavigationBar></NavigationBar>
    </div>
  );
};

export default Header;
