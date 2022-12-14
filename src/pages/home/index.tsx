import React, { useEffect, useLayoutEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { getListBanner } from "../../services/actions/getListMoviesAction";
import { AppState } from "../../services/reducers";

const Home = () => {
  const [listData, setListData] = useState([]);
  const dispatch = useDispatch();
  const listBanner = useSelector(
    (state: AppState) => state.listMovies.listBanner
  );
  useEffect(() => {
    dispatch(getListBanner());
  }, []);

  useEffect(() => {
    if (listBanner?.length > 0) {
      setListData(listBanner);
    }
  }, [listBanner]);

  return (
    <div className="mv-home-container">
      <div className="mv-home-banner">
        <Carousel style={{ height: "100%" }}>
          {listData.map((item: any) => (
            <Carousel.Item key={item.maBanner}>
              <img
                className="d-block w-100"
                src={item.hinhAnh}
                alt="First slide"
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="mv-home-list"></div>
    </div>
  );
};

export default Home;
