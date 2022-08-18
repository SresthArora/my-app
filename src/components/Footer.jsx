import React from "react";
import Image from "../images/appimg.avif";
import AppStore from "../images/appstore.webp";
import PlayStore from "../images/playstore.webp";

function Footer() {
  return (
    <footer>
      <div class="get-app">
        <img src={Image} class="app-img" alt="" />
        <div class="app-details">
          <h1 class="app-title">Get the StoreHook app</h1>
          <p class="app-desc">
            We will send you a link, open it on your phone to download <br />
            the app
          </p>
          <input
            type="email"
            class="app-email"
            placeholder="Email"
            name=""
            id=""
          />
          <button class="app-btn">Share App Link</button>
          <p class="app-link">Download app from</p>
          <a href="">
            <img src={PlayStore} class="img1-link" alt="" />
          </a>
          <a href="">
            <img src={AppStore} class="img2-link" alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
