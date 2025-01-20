import React from "react";
import { Link } from "react-router-dom";

function SocialIcons() {
  return (
    <>
      <div className="social-container">
        <ul className="social-icons">
          <li>
            <Link href="/">
              <i className="fa fa-brands fa-facebook"></i>
            </Link>
          </li>
          <li>
            <Link href="/">
              <i className="fa fa-brands fa-instagram"></i>
            </Link>
          </li>
          <li>
            <Link href="/">
              <i className="fa fa-brands fa-x-twitter"></i>
            </Link>
          </li>
          <li>
            <Link href="/">
              <i className="fa fa-brands fa-linkedin"></i>
            </Link>
          </li>
          <li>
            <Link href="/">
              <i className="fa fa-brands fa-youtube-play"></i>
            </Link>
          </li>          
        </ul>
      </div>

      {/* <div className="social-menu">
        <ul>
          <li>
            <Link href="/">
              <i class="fab fa-facebook-f"></i>
            </Link>
          </li>
          <li>
            <Link href="/">
              <i class="fab fa-instagram"></i>
            </Link>
          </li>
          <li>
            <Link href="/">
              <i class="fab fa-x-twitter"></i>
            </Link>
          </li>
        </ul>
      </div> */}
    </>
  );
}

export default SocialIcons;
