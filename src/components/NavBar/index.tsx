import SignInButton from "@components/SignInButton";
import SignOutButton from "@components/SignOutButton";
import { useIsAuthenticated } from "@azure/msal-react";
import { Link } from "react-router-dom";
import "./index.scss";

const NavBar = () => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <nav>
      <li id="nav-list">
        <ul>
          <Link to="/">Home</Link>
        </ul>
        <ul>
          <Link to="about">About</Link>
        </ul>
        <ul>{isAuthenticated ? <SignOutButton /> : <SignInButton />}</ul>
      </li>
    </nav>
  );
};

export default NavBar;
