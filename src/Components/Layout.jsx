/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { LanguageContext } from "../App";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function Layout() {
  //
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdown1, setShowDropdown1] = useState(false);

  const { setLanguage } = useContext(LanguageContext);

  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);
  const handleMouseEnter1 = () => setShowDropdown1(true);
  const handleMouseLeave1 = () => setShowDropdown1(false);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    translatePageContent(lang);
    setShowDropdown(false); // Close dropdown after selection
  };

  const translatePageContent = async (targetLanguage) => {
    if (targetLanguage === "en") {
      restoreOriginalContent();
      return;
    }

    const elements = document.querySelectorAll(
      "*:not(script):not(style):not(meta)"
    );
    const textsToTranslate = [];
    const elementMap = [];

    // Collect all text content
    elements.forEach((el) => {
      if (
        el.childNodes.length === 1 &&
        el.childNodes[0].nodeType === Node.TEXT_NODE
      ) {
        const text = el.textContent.trim();
        if (text) {
          textsToTranslate.push(text);
          elementMap.push(el);
        }
      }
    });

    if (textsToTranslate.length === 0) return;

    try {
      // Split texts into chunks of 128 segments each
      const chunkSize = 128;
      const textChunks = [];
      for (let i = 0; i < textsToTranslate.length; i += chunkSize) {
        textChunks.push(textsToTranslate.slice(i, i + chunkSize));
      }

      const translations = [];

      // Translate each chunk sequentially
      for (const chunk of textChunks) {
        const response = await fetch(
          `https://translation.googleapis.com/language/translate/v2?key=AIzaSyBFPYrl8v_HRI1jm2nMHNtankZPdFGILPQ`,
          {
            method: "POST",
            body: JSON.stringify({
              q: chunk,
              target: targetLanguage,
            }),
            headers: { "Content-Type": "application/json" },
          }
        );

        const data = await response.json();
        if (data.data && data.data.translations) {
          translations.push(...data.data.translations);
        }
      }

      // Update text content with translations
      translations.forEach((translation, index) => {
        elementMap[index].textContent = translation.translatedText;
      });
    } catch (error) {
      console.error("Translation Error:", error);
    }
  };

  const restoreOriginalContent = () => {
    window.location.reload(); // Reload the page to restore original content
  };
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  //
  return (
    <>
      {/* <div className="dropdown position-relative"> */}
      {/* <button
            className="btn btn-light btn-sm"
            onClick={toggleDropdown}
            style={{ borderRadius: "5px", border: "1px solid #ddd" }}
          >
            <FontAwesomeIcon icon="fa-solid fa-language" />
          </button> */}

      {/* </div>  */}
      <header className="header-section header-7 sticky-navbar hover-menu">
        <div className="container">
          <nav className="navbar navbar-expand-xl">
            <div className="d-flex w-100 align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-2">
                <a
                  className="navbar-brand d-flex align-items-center gap-2"
                  aria-label="nav-brands"
                  href="https://rajiv.bztech.in/"
                >
                  <img
                    style={{ width: "220px" }}
                    src="https://res.cloudinary.com/dsj9t6adh/image/upload/v1737313139/jzcn2tynshjpdjflpysa.png"
                    className="logo-light"
                    alt="logo"
                  />
                  <img
                    style={{ width: "220px" }}
                    src="https://res.cloudinary.com/dsj9t6adh/image/upload/v1737313139/jzcn2tynshjpdjflpysa.png"
                    className="logo-dark"
                    alt="logo"
                  />
                </a>
              </div>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#navContentmenu"
                aria-controls="navContentmenu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="d-none d-xl-block">
                <div className="d-flex gap-50 align-items-center">
                  <ul className="menu-list list-unstyled d-flex gap-40 navbar-nav mb-2 me-2 mb-lg-0">
                    {/* <li className="nav-item">
                      <a
                        className="nav-link active text-uppercase"
                        href="#what-to-expect-section"
                        aria-label="nav-links"
                      >
                        <span className="fw-semibold">What's New</span>
                      </a>
                    </li> */}
                    <li className="nav-item">
                      <a
                        className="nav-link text-uppercase"
                        href="#about"
                        aria-label="nav-links"
                      >
                        <span className="fw-semibold">About</span>
                      </a>
                    </li>
                    {/*Multiple dropdown  */}

                    {/*  */}
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link text-uppercase dropdown-toggle"
                        href="#schedule"
                        id="scheduleDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        aria-label="schedule-dropdown"
                      >
                        <span className="fw-semibold">Schedule</span>
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="scheduleDropdown"
                      >
                        <li>
                          <a className="dropdown-item" href="#azad-maidan">
                            Azad Maidan
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#venue-2">
                            Venue 2
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#venue-3">
                            Venue 3
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <a
                        className="nav-link text-uppercase"
                        href="#speakers"
                        aria-label="nav-links"
                      >
                        <span className="fw-semibold">Speakers</span>
                      </a>
                    </li>
                    {/* <li
                      className="nav-item dropdown"
                      onMouseEnter={handleMouseEnter1}
                      onMouseLeave={handleMouseLeave1}
                    >
                      <a
                        className="nav-link text-uppercase dropdown-toggle"
                        href="#speakers"
                        id="speakersDropdown"
                        role="button"
                        aria-expanded={showDropdown1 ? 'true' : 'false'}
                        aria-label="speakers-dropdown"
                      >
                        <span className="fw-semibold">Speakers</span>
                      </a>
                      <ul
                        className={`dropdown-menu ${showDropdown1 ? 'show' : ''}`}
                        aria-labelledby="speakersDropdown"
                      >
                        <li>
                          <a className="dropdown-item" href="#speakers-2023">
                            2023
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#speakers-2024">
                            2024
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="https://v2.bztech.in/" target="_blank">
                            2025
                          </a>
                        </li>
                      </ul>
                    </li> */}

                    <li className="nav-item">
                      <a
                        className="nav-link text-uppercase"
                        href="#Team"
                        aria-label="nav-links"
                      >
                        <span className="fw-semibold">Team</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link text-uppercase"
                        // href="#publishers"
                        aria-label="nav-links"
                        href="https://v3.bztech.in/"
                        target="_blank"
                      >
                        <span className="fw-semibold">Publishers</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link text-uppercase"
                        href="#FAQ"
                        aria-label="nav-links"
                      >
                        <span className="fw-semibold">FAQ</span>
                      </a>
                    </li>
                  </ul>

                  <a
                    href="#registration"
                    className="btn btn-primary d-inline-flex align-items-center gap-2 btn-rounded"
                    aria-label="registration-button"
                  >
                    <span className="fw-bold">Registration</span>
                  </a>

                  <motion.i
                    className="fa fa-language"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Select Language"
                    onClick={toggleDropdown}
                    style={{
                      cursor: "pointer",
                      fontSize: "20px",
                      color: "darkblue",
                      marginTop: "6px",
                      marginLeft: "-30px",
                    }}
                    animate={{ rotate: [0, -15, 150, -150, 0] }}
                    transition={{
                      duration: 2,
                      ease: "easeInOut",
                      repeat: Infinity,
                    }}
                  />

                  {showDropdown && (
                    <div
                      style={{
                        position: "absolute",
                        top: "100%",
                        right: "0",
                        backgroundColor: "#fff",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        borderRadius: "5px",
                        zIndex: 10,
                        width: "150px",
                      }}
                    >
                      <button
                        style={{
                          display: "block",
                          width: "100%",
                          padding: "10px",
                          border: "none",
                          backgroundColor: "transparent",
                          textAlign: "left",
                          cursor: "pointer",
                          fontSize: "14px",
                          color: "#333",
                        }}
                        onClick={() => handleLanguageChange("en")}
                      >
                        English
                      </button>
                      <button
                        style={{
                          display: "block",
                          width: "100%",
                          padding: "10px",
                          border: "none",
                          backgroundColor: "transparent",
                          textAlign: "left",
                          cursor: "pointer",
                          fontSize: "14px",
                          color: "#333",
                        }}
                        onClick={() => handleLanguageChange("hi")}
                      >
                        Hindi
                      </button>
                      <button
                        style={{
                          display: "block",
                          width: "100%",
                          padding: "10px",
                          border: "none",
                          backgroundColor: "transparent",
                          textAlign: "left",
                          cursor: "pointer",
                          fontSize: "14px",
                          color: "#333",
                        }}
                        onClick={() => handleLanguageChange("mr")}
                      >
                        Marathi
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
      {/* Header ======================*/}
      <div
        className="offcanvas offcanvas-top"
        id="navContentmenu"
        data-bs-backdrop="static"
        tabIndex={-1}
      >
        <div className="offcanvas-header">
          <a className="navbar-brand" href="index.html" aria-label="nav-brands">
            <img src="https://res.cloudinary.com/dsj9t6adh/image/upload/v1737313139/jzcn2tynshjpdjflpysa.png" alt="logo"
            style={{width:"305px"}}
            />
          </a>
          {/*  */}
          <div style={{ position: "relative" }}>
            <i
              className="fa fa-language"
              onClick={toggleDropdown}
              style={{
                cursor: "pointer",
                fontSize: "20px",
                color: "#fff",
                marginRight: "15px",
              }}
            ></i>
            {showDropdown && (
              <div
                style={{
                  position: "absolute",
                  top: "30px",
                  right: 0,
                  backgroundColor: "#fff",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  borderRadius: "5px",
                  zIndex: 10,
                  width: "150px",
                }}
              >
                <button
                  style={{
                    display: "block",
                    width: "100%",
                    padding: "10px",
                    border: "none",
                    backgroundColor: "transparent",
                    textAlign: "left",
                    cursor: "pointer",
                    fontSize: "14px",
                    color: "#333",
                  }}
                  onClick={() => handleLanguageChange("en")}
                >
                  English
                </button>
                <button
                  style={{
                    display: "block",
                    width: "100%",
                    padding: "10px",
                    border: "none",
                    backgroundColor: "transparent",
                    textAlign: "left",
                    cursor: "pointer",
                    fontSize: "14px",
                    color: "#333",
                  }}
                  onClick={() => handleLanguageChange("hi")}
                >
                  Hindi
                </button>
                <button
                  style={{
                    display: "block",
                    width: "100%",
                    padding: "10px",
                    border: "none",
                    backgroundColor: "transparent",
                    textAlign: "left",
                    cursor: "pointer",
                    fontSize: "14px",
                    color: "#333",
                  }}
                  onClick={() => handleLanguageChange("mr")}
                >
                  Marathi
                </button>
              </div>
            )}
          </div>
          {/*  */}
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body d-flex justify-content-center">
          <ul className="navbar-nav custom-navbar-nav mb-2 mb-lg-0">
            {/* <li className="nav-item dropdown offcanvas-pages-dropdown">
              <a
                className="nav-link  active text-uppercase"
                aria-current="page"
                href="#what-to-expect-section"
                aria-label="nav-links"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="fw-semibold">What To Expect</span>
              </a>
            </li> */}
            <li className="nav-item">
              <a
                className="nav-link text-uppercase"
                href="#about"
                aria-label="nav-links"
              >
                <span className="fw-semibold">About</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-uppercase"
                href="#schedule"
                aria-label="nav-links"
              >
                <span className="fw-semibold">Schedule</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-uppercase"
                href="#speakers"
                aria-label="nav-links"
              >
                <span className="fw-semibold">Speakers</span>
              </a>
            </li>
            <li className="nav-item dropdown offcanvas-pages-dropdown">
              <a
                className="nav-link  text-uppercase"
                href="#Team"
                aria-label="nav-links"
              // data-bs-toggle="dropdown"
              // aria-expanded="false"
              >
                <span className="fw-semibold">Team</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-uppercase"
                href="#ticket"
                aria-label="nav-links"
              >
                <span className="fw-semibold">Registration</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="main"
        data-bs-spy="scroll"
        data-bs-target="#navContentmenu"
        data-bs-root-margin="0px 0px -50%"
        data-bs-smooth-scroll="true"
      ></div>
    </>
  );
}

export default Layout;
