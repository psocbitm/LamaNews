import React, { useEffect, useState } from "react";
import Sidebar, { DrawerHeader } from "../../components/sidebar/Sidebar";
import Box from "@mui/material/Box";
import Newscard from "../../components/newscard/Newscard";
import axios from "axios";
import { useTheme } from "@mui/material/styles";
import InfiniteScroll from "react-infinite-scroll-component";
import ClipLoader from "react-spinners/ClipLoader";
import Masonry from "@mui/lab/Masonry";
import { Link, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Update } from "@mui/icons-material";

function Newspage({ category, pagesize }) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const [url, setUrl] = useState("");
  const theme = useTheme();
  const mode = useSelector((state) => state.theme.mode);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=a9d9cc0e2bbc4bd3b490b54617009e71&pageSize=${pagesize}&page=${page}&category=${category}`;
      const result = await axios(url);
      setTotalResults(result.data.totalResults);
      setData(data.concat(result.data.articles));
      setLoading(false);
    }
    fetchData();
  }, [page]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=a9d9cc0e2bbc4bd3b490b54617009e71&pageSize=${pagesize}&page=${page}&category=${category}`;
      const result = await axios(url);
      setTotalResults(result.data.totalResults);
      setData([]);
      setData(result.data.articles);
      setLoading(false);
    }
    fetchData();
  }, [category]);

  const fetchMoreData = () => {
    setPage(page + 1);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />

          <div className="news-articles-container">
            <InfiniteScroll
              style={{ overflow: "hidden" }}
              dataLength={data.length}
              next={fetchMoreData}
              hasMore={data.length !== totalResults}
              loader={
                <h1 style={{ textAlign: "center" }}>
                  <ClipLoader
                    color={mode === "dark" ? "white" : "black"}
                    loading={loading}
                    size="50px"
                  />
                </h1>
              }
            >
              <Masonry
                style={{ padding: "10px 0 0 10px" }}
                columns={{ lg: 4, xs: 1, sm: 2, md: 3 }}
                spacing={3}
              >
                {data.map((article) => (
                  <Newscard
                    key={article.url}
                    title={article.title}
                    imgUrl={
                      article.urlToImage ||
                      "https://www.netix.net/assets/logo/no_image.png"
                    }
                    desc={article.description}
                    url={article.url}
                  />
                ))}
              </Masonry>
            </InfiniteScroll>
          </div>
        </Box>
      </Box>
    </>
  );
}

export default Newspage;
