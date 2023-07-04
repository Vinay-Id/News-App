import "./App.css";
import { useState, useEffect } from "react";
function App() {
  // 913f250da2934f6086bcb345a94933a6
  const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${import.meta.env.VITE_APIKEY}`;
  const [news, setNews] = useState([]);

  useEffect(() => {
    function fetchNews() {
      fetch(url)
        .then((data) => data.json())
        .then((res) => {
          // console.log(res.articles);
          setNews(res.articles);
        });

    }
    fetchNews();
  }, []);
  return (
    <div className="container my-5 main-Div">
      <h1 className="heading">Today's news</h1>
      <div className="row text-center">
        {news.map((element, index) => (
          <div key={index} className="col my-3">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={element.urlToImage}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{element.title}</h5>
                <p className="card-text">{element.description}</p>
                <a href={element.url} className="btn btn-primary">
                  Read more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
