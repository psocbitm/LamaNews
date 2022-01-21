import React, { useEffect, useState } from "react";
import Sidebar, { DrawerHeader } from "../../components/sidebar/Sidebar";
import Box from "@mui/material/Box";
import Newscard from "../../components/newscard/Newscard";
import axios from "axios";
import { useTheme } from "@mui/material/styles";
import InfiniteScroll from "react-infinite-scroll-component";
import ClipLoader from "react-spinners/ClipLoader";
import Masonry from "@mui/lab/Masonry";
import { Link } from "react-router-dom";
function Newspage({category,country, limit }) {
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const url = country
        ? `http://api.mediastack.com/v1/news?access_key=cd2fa18627a92e9cfe2c8248d0c1f675&countries=${country}&limit=${limit}&offset=${offset}&categories=${category}&languages=en`
        : `http://api.mediastack.com/v1/news?access_key=cd2fa18627a92e9cfe2c8248d0c1f675&limit=${limit}&offset=${offset}&categories=${category}&languages=en`;
      console.log(url);
      const result = await axios(url);
      setData(data.concat(result.data.data));
      setLoading(false);
    }
    fetchData();
  },[offset,category]);

  const fetchMoreData = () => {
    setOffset(offset + limit);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidebar />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <div className="news-articles-container">
            <InfiniteScroll
              dataLength={data.length}
              next={fetchMoreData}
              hasMore={data.length !== 100}
              loader={
                <h1 style={{ textAlign: "center" }}>
                  <ClipLoader color="black" loading={loading} size="50px" />
                </h1>
              }
            >
              <Masonry
                style={{ padding: "10px 0 0 10px" }}
                columns={{ lg: 4, xs: 1, sm: 2, md: 3 }}
                spacing={2}
              >
                {data.map((article) => (
                  <Newscard
                    key={article.url}
                    title={article.title}
                    imgUrl={
                      article.image ||
                      "https://www.netix.net/assets/logo/no_image.png"
                    }
                    desc={article.description}
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
