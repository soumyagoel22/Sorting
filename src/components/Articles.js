import React from "react";

const Articles = ({ articles }) => {
  // const title1 = articles.map((articles) => (
  //   <div key={articles.upvotes}>{articles.title}</div>
  // ));
  // const upvotes1 = articles.map((articles) => (
  //   <div key={articles.upvotes}>{articles.upvotes}</div>
  // ));
  // const date1 = articles.map((articles) => (
  //   <div key={articles.upvotes}>{articles.date}</div>
  // ));

  return (
    <div className="card w-50 mx-auto">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr data-testid="article" key={articles.upvotes}>
            <td key={articles.upvotes} data-testid="article-title">
              {title1}
            </td>
            <td key={articles.upvotes} data-testid="article-upvotes">
              {upvotes1}
            </td>
            <td key={articles.upvotes} data-testid="article-date">
              {date1}
            </td>
          </tr> */}
          {articles.map((art, index) => (
            <tr data-testid="article" key={index}>
              <td
                key={articles.upvotes}
                data-testid="article-title"
                style={{ textTransform: "capitalize" }}
              >
                {art.title}
              </td>
              <td key={articles.upvotes} data-testid="article-upvotes">
                {art.upvotes}
              </td>
              <td key={articles.upvotes} data-testid="article-date">
                {art.date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Articles;
