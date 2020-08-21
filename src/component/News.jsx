import React, { useState, useEffect } from "react";
import axios from "axios";

export default function News() {
  const [news, setNews] = useState([
    {
      src: "",
      author: "",
      description: "",
      date: "",
      title: "",
      url: "",
      img: "",
    },
  ]);

  useEffect(() => {
    const url =
      "http://newsapi.org/v2/top-headlines?" +
      "country=il&" +
      "apiKey=34ab3d0aace74f24bd49a56971a38bc7";
    axios.get(url).then((r) => {
      let newData = [];
      r.data.articles.map((d) => {
        newData.push({
          src: d.source.name,
          author: d.author,
          description: d.description,
          date: d.publishedAt.split(/[a-zA-Z]/)[0],
          title: d.title,
          url: d.url,
          img: d.urlToImage,
        });
        return d;
      });
      setNews(newData);
    });
  }, []);

  return (
    <div className="news">
      {news.map((n, i) => {
        return (
          <div key={i}>
            <div className="news-grid">
              <div className="grid-left">
                <img width="100px" height="70px" alt="new" src={n.img} />
                <a href={n.url} rel="noopener noreferrer" target="_blank">
                  <div>{n.author}</div>
                  <div>{n.src}</div>
                </a>
              </div>
              <div className="grid-tight">
                <h3>{n.title}</h3>
                <div style={{ fontSize: "10px" }}>{n.date}</div>
                <div>{n.description}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
