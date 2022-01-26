import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Rings } from  'react-loader-spinner'


export default function Landing(props) {
  function randomRotateDeg() {
    const decider = Math.floor(Math.random() * 2);

    if (decider === 0) {
      return Math.random() * 2;
    } else {
      return Math.random() * -2;
    }
  }
  console.log(props.isFetched);
  const galleryCopy = [...props.gallery];
  return (
    <>
      <section className="flex-column landing">
        <img className="fade_in banner_title" src="./img/banner_tile_01.png" alt="title banner" />
        <div className="vendor_container">
          <h2>Available here:</h2>
          <div className="vendor_links">
            <svg className="vender_links" width="54" height="55" viewBox="0 0 64.75 65.438">
              <path
                d="M32.318-.009a32.547 32.547 0 00-32.319 30.1l17.383 7.248a9.065 9.065 0 015.167-1.607c.172 0 .342 0 .512.014l7.729-11.307v-.158a12.231 12.231 0 1112.23 12.345h-.278l-11.026 7.935q.012.217.012.438a9.175 9.175 0 01-18.182 1.83L1.115 41.637A32.475 32.475 0 1032.318-.009zm-11.994 49.66l-3.983-1.665a6.854 6.854 0 0012.554-.338 6.95 6.95 0 00.012-5.316 6.853 6.853 0 00-8.8-3.854l4.116 1.726a5.125 5.125 0 012.73 6.691 5.061 5.061 0 01-6.629 2.756zm30.845-25.369a8.15 8.15 0 10-8.149 8.221 8.2 8.2 0 008.149-8.221zm-14.255-.014a6.121 6.121 0 116.118 6.174 6.146 6.146 0 01-6.118-6.174z"
                fill="currentColor"
                fillRule="evenodd"
              ></path>
            </svg>
            <svg className="vender_links" width="55" height="55" viewBox="0 0 65.875 65.813">
              <path
                d="M16.487 13.558a6.191 6.191 0 106.216 6.3 6.1 6.1 0 00-6.216-6.3zM30.843.009q-6.757.007-13.51 0a16.51 16.51 0 00-7.306 1.51c-6.227 3-9.766 8-9.9 14.9C-.082 27.427.061 38.442.085 49.453a15.279 15.279 0 00.367 2.991 16.274 16.274 0 004.812 8.666 16.892 16.892 0 0012.045 4.708h13.576c.83 0 .916-.084.916-.916V1c.005-.959-.027-.991-.958-.991zm-4.409 60.439c-.207.016-.387.036-.567.036-2.873 0-5.743.012-8.616 0a11.528 11.528 0 01-8.107-3.064 10.984 10.984 0 01-3.723-8.192c-.052-10.844-.023-21.689-.02-32.53a11.556 11.556 0 019.254-11.094 16.466 16.466 0 012.759-.249c2.767-.031 5.535-.012 8.3-.012h.718v55.105zm39.436-43.1a20.59 20.59 0 00-.354-3.735A16.8 16.8 0 0049.24.022c-3.3-.052-6.607-.011-9.912-.011-.938 0-.951.014-.951.926v63.757c0 1.118 0 1.118 1.09 1.118 3.183 0 6.362.016 9.545-.008a16.91 16.91 0 0016.872-17.045q.006-15.699-.014-31.408zM50.988 42.804a6.618 6.618 0 01.478-13.223 6.618 6.618 0 11-.478 13.226z"
                fill="currentColor"
                fillRule="evenodd"
              ></path>
            </svg>
            <svg className="vender_links" width="56" height="56" viewBox="0 0 66.126 66.124">
              <path
                d="M24.002 18.362a.171.171 0 00.05-.1.152.152 0 00-.064-.109C12.793 7.009 9.801 9.561 9.847 9.526a33.048 33.048 0 00-3.078 43.547.148.148 0 00.178.061.14.14 0 00.038-.173C4.461 45.17 17.346 26.277 24.002 18.362zm32.3-8.833s-.007-.01-.032-.031l.028.031c.04.035-2.928-2.533-14.129 8.613a.154.154 0 00-.059.113.166.166 0 00.048.095c6.654 7.919 19.524 26.824 17.006 34.616a.136.136 0 00.038.173.148.148 0 00.177-.061 33.05 33.05 0 00-3.081-43.551zm-40.4-4.445c5.665-1.451 14.66 3.261 17.1 4.663a.141.141 0 00.074.027.11.11 0 00.066-.027c.922-.553 10.652-6.084 17.046-4.7a.13.13 0 00.161-.058.127.127 0 00-.052-.164 33.076 33.076 0 00-34.494.031.132.132 0 00-.058.166.131.131 0 00.157.06zm38.936 52.845l-.009.008a.011.011 0 01.009-.008zM33.174 26.554a.182.182 0 00-.1-.049.232.232 0 00-.116.049c-9.882 7.525-26.81 26.127-21.653 31.383a33.053 33.053 0 0043.522 0c5.177-5.256-11.757-23.858-21.651-31.383z"
                fill="currentColor"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </section>
      <div className="gradient_background">
        <section className="intro">
          <div className="intro_txt">
            <h2>What is tranding time?</h2>
            <p>
              Stranded in an island paradise inhabited by a group of friendly frog people.
              Enjoy a sandbox-island-life and go exploring in you own tempo.
              Solve your new friends quirky problems and trade yourself towards rebuilding you shipwrecked
              vessel!
            </p>
          </div>
          <div className="introvid_container">
            <video width="460" height="260" controls>
              <source src="./img/intro_mov.mp4" />
            </video>
          </div>
        </section>
        <section className="gallery">
          <h2>Gallery</h2>
          <div className="gallery_container">
            {props.isFetched === true ? (
              <>
                {galleryCopy.map((galleryItem) => (
                  <Link className="fade_in"  key={galleryItem.galleryimg} to="gallerypopup">
                    <div onClick={() => props.setCurrentImg(galleryItem)} style={{ transform: `rotate(${randomRotateDeg()}deg)` }} className="gallery_item_container">
                      <img className="gallery_item" src={`./img/${galleryItem.galleryimg}.jpg`} alt={galleryItem.alt} />
                      <p className="gallery_font">{galleryItem.description}</p>
                    </div>
                  </Link>
                ))}
              </>
            ) : (
              <Rings color="#fed218" height={280} width={280} />
            )}
          </div>
        </section>
      </div>
    </>
  );
}