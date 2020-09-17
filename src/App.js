import React, { useState } from "react";
import "./App.css";
import "h8k-components";

import Articles from "./components/Articles";

const title = "Sorting Articles";

const App = ({ articles }) => {
  const [state, setState] = useState(articles);
  console.log(state);
  const onUpvoted = () => {
    const compFunc = (a, b) => b.upvotes - a.upvotes;
    setState([...articles.sort(compFunc)]);
  };

  const onRecent = () => {
    const rec = (a, b) => new Date(b.date) - new Date(a.date);
    setState([...articles.sort(rec)]);
  };

  const onTitle = () => {
    const title1 = (a, b) =>
      a.title.toLowerCase().localeCompare(b.title.toLowerCase());
    setState([...articles.sort(title1)]);
  };

  const onReverse = () => {
    setState([...articles.reverse()]);
  };

  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-row align-items-center justify-content-center my-20 navigation">
        <label className="form-hint mb-0 text-uppercase font-weight-light">
          Sort By
        </label>
        <button
          data-testid="most-upvoted-link"
          className="small"
          onClick={onUpvoted}
        >
          Most Upvoted
        </button>
        <button
          data-testid="most-recent-link"
          className="small"
          onClick={onRecent}
        >
          Most Recent
        </button>
        <button
          data-testid="most-recent-link"
          className="small"
          onClick={onTitle}
        >
          Title
        </button>
        <button
          data-testid="most-recent-link"
          className="small"
          onClick={onReverse}
        >
          Reverse
        </button>
      </div>
      <Articles articles={articles} />
    </div>
  );
};

export default App;
