import React, { useEffect, useState } from "react";

import "./DarkTheme.css";
import { ThemeContext, themes } from "./context/theme-context";
import NavBar from "./NavBar";
import ExpandableSidebar from "./ExpandableSidebar";
import About from "./About";
import ExpensesCalcApp from "./expenses-calculator/ExpensesCalcApp";
import Dha from "./Dha";
import Home from "./Home";

export default function DarkTheme() {
  const [theme, setTheme] = useState(themes.light);
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavLinkClick = (page, event) => {
    event.preventDefault();
    setCurrentPage(page);
  };

  const handleExpensesCalculatorClick = (event) => {
    event.preventDefault();
    setCurrentPage("expenses");
  };

  function changeTheme() {
    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);
  }

  useEffect(() => {
    const docBody = document.body;

    switch (theme) {
      case themes.light:
        docBody.classList.remove("bg-dark", "text-light");
        docBody.classList.add("bg-light", "text-dark");
        break;
      case themes.dark:
        docBody.classList.remove("bg-light", "text-dark");
        docBody.classList.add("bg-dark", "text-light");
        break;
      default:
        break;
    }
  }, [theme]);

  let pageContent;
  switch (currentPage) {
    case "home":
      pageContent = <Home />;
      break;
    case "about":
      pageContent = <About />;
      break;
    case "dha":
      pageContent = <Dha />;
      break;
    case "expenses":
      pageContent = <ExpensesCalcApp />;
      break;

    default:
      pageContent = <div>Page not found</div>;
  }

  return (
    <>
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        <NavBar handleNavLinkClick={handleNavLinkClick} />
        <ExpandableSidebar
          handleExpensesCalculatorClick={handleExpensesCalculatorClick}
        />
        {currentPage === null && <ExpensesCalcApp />}

        {pageContent}
      </ThemeContext.Provider>
    </>
  );
}
