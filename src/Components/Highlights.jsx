import React from "react";

function Highlights() {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-30">
        <div className="col cards">
          <input
            type="checkbox"
            id="card1"
            className="more"
            aria-hidden="true"
          />
          <div className="contents">
            <div
              className="front"
              >
              <div className="inner">
                <div className="rating">
                  <img
                    src="/children.gif"
                    alt="Children's Activities Icon"
                    width={68}
                    height={64}
                  />
                </div>
                <h2 className="text1">Children Activities</h2>
                <label htmlFor="card1" className="button" aria-hidden="true">
                  Flip
                </label>
              </div>
            </div>
            <div className="back backBG1">
              <div className="inner">
                <div className="description">
                  <p>
                    A dedicated space promoting children&apos;s literature and
                    the joy of reading through storytelling, workshops, panel
                    discussions, quizzes, and contests.
                  </p>
                </div>
                <label for="card1" className="button return" aria-hidden="true">
                  <i className="fas fa-arrow-left"></i>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="col cards">
          <input
            type="checkbox"
            id="card2"
            className="more"
            aria-hidden="true"
          />
          <div className="contents">
            <div
              className="front">
              <div className="inner">
                <h2 className="text2">Authors Corner</h2>
                <div className="rating">
                  <img
                    src="/Author.gif"
                    alt="Children's Activities Icon"
                    width={68}
                    height={64}
                  />
                </div>
                <label htmlFor="card2" className="button" aria-hidden="true">
                  Flip
                </label>
              </div>
            </div>
            <div className="back backBG1">
              <div className="inner">
                <div className="description">
                  <p>
                    A hub for literary enthusiasts with engaging dialogues,
                    panel discussions, book launches, and lively interactions
                    with renowned authors.
                  </p>
                </div>
                <label for="card2" className="button return" aria-hidden="true">
                  <i className="fas fa-arrow-left"></i>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="col cards">
          <input
            type="checkbox"
            id="card3"
            className="more"
            aria-hidden="true"
          />
          <div className="contents">
            <div className="front">
              <div className="inner">
                <div className="rating">
                  <img
                    src="/cultural.gif"
                    alt="Children's Activities Icon"
                    width={68}
                    height={64}
                  />
                </div>
                <h2 className="text3">Cultural Activities</h2>
                <label htmlFor="card3" className="button" aria-hidden="true">
                  Flip
                </label>
              </div>
            </div>
            <div className="back backBG1">
              <div className="inner">
                <div className="description">
                  <p>
                    Experience cultural presentations from acclaimed bands and
                    artists representing diverse Indian states and the vibrant
                    city of Mumbai.
                  </p>
                </div>
                <label for="card3" className="button return" aria-hidden="true">
                  <i className="fas fa-arrow-left"></i>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="col cards">
          <input
            type="checkbox"
            id="card4"
            className="more"
            aria-hidden="true"
          />
          <div className="contents">
            <div className="front">
              <div className="inner">
                <div className="rating">
                  <img
                    src="/film-festival.gif"
                    alt="Children's Activities Icon"
                    width={68}
                    height={64}
                  />
                </div>
                <h2 className="text6">Film Festival</h2>
                <label htmlFor="card4" className="button" aria-hidden="true">
                  Flip
                </label>
              </div>
            </div>
            <div className="back backBG1">
              <div className="inner">
                <div className="description">
                  <p>
                    An open-to-all showcase of educative short films,
                    particularly designed to captivate young audiences.
                  </p>
                </div>
                <label for="card4" className="button return" aria-hidden="true">
                  <i className="fas fa-arrow-left"></i>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="col cards">
          <input
            type="checkbox"
            id="card5"
            className="more"
            aria-hidden="true"
          />
          <div className="contents">
            <div className="front">
              <div className="inner">
                <h2 className="text5">Workshop Stage</h2>
                <div className="rating">
                  <img
                    src="/workshop.gif"
                    alt="Children's Activities Icon"
                    width={68}
                    height={64}
                  />
                </div>
                <label htmlFor="card5" className="button" aria-hidden="true">
                  Flip
                </label>
              </div>
            </div>
            <div className="back backBG1">
              <div className="inner">
                <div className="description">
                  <p>
                    Hands-on workshops featuring live culinary demonstrations,
                    theatre sessions, and other engaging activities.
                  </p>
                </div>
                <label for="card5" className="button return" aria-hidden="true">
                  <i className="fas fa-arrow-left"></i>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="col cards">
          <input
            type="checkbox"
            id="card6"
            className="more"
            aria-hidden="true"
          />
          <div className="contents">
            <div className="front">
              <div className="inner">
                <h2 className="text4">International Authors Meet</h2>
                <div className="rating">
                  <img
                    src="/international.gif"
                    alt="Children's Activities Icon"
                    width={68}
                    height={64}
                  />
                </div>
                <label htmlFor="card6" className="button" aria-hidden="true">
                  Flip
                </label>
              </div>
            </div>
            <div className="back backBG1">
              <div className="inner">
                <div className="description">
                  <p>
                    A unique opportunity to interact with celebrated
                    international authors, fostering global literary exchanges.
                  </p>
                </div>
                <label for="card6" className="button return" aria-hidden="true">
                  <i className="fas fa-arrow-left"></i>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Highlights;
