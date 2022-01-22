import React, { useEffect, useState } from "react";
import Sidebar, { DrawerHeader } from "../../components/sidebar/Sidebar";
import Box from "@mui/material/Box";
import Newscard from "../../components/newscard/Newscard";
import axios from "axios";
import { useTheme } from "@mui/material/styles";
import InfiniteScroll from "react-infinite-scroll-component";
import ClipLoader from "react-spinners/ClipLoader";
import Masonry from "@mui/lab/Masonry";
import { useSelector } from "react-redux";
function NewspageMediaStack({ category, limit }) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const mode = useSelector((state) => state.theme.mode);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const url = `https://newsdata.io/api/1/news?apikey=pub_38704c96c835ffc76e06a96e4ea7d1212235&country=in&language=en&page=${page}&category=${category}`;
      const result = await axios(url);
      setTotalResults(result.data.totalResults);
      setData(data.concat(result.data.results));
      setLoading(false);
    }
    fetchData();
  }, [page]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const url = `https://newsdata.io/api/1/news?apikey=pub_38704c96c835ffc76e06a96e4ea7d1212235&country=in&language=en&page=${page}&category=${category}`;
      const result = await axios(url);
      setData([]);
      setTotalResults(result.data.totalResults);
      setData(result.data.results);
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
                    key={article.link}
                    title={article.title}
                    imgUrl={
                      article.image_url ||
                      "https://www.netix.net/assets/logo/no_image.png"
                    }
                    desc={article.description}
                    url={article.link}
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

export default NewspageMediaStack;
