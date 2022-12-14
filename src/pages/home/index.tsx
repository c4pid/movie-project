import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { getListBanner } from "../../services/actions/getListMoviesAction";
import { AppState } from "../../services/reducers";

const Home = () => {
  const listBanner = useSelector(
    (state: AppState) => state.listMovies.listBanner
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListBanner());
    console.log(listBanner);
    debugger;
  }, []);
  // useEffect(() => {
  //     console.log(listBanner)
  // },[listBanner])

  return (
    <div className="mv-home-container">
      <div className="mv-home-banner">
        <Slide>
          {listBanner &&
            listBanner?.map((item: any) => (
              <img src={item.hinhAnh} key={item.maBanner} />
            ))}
        </Slide>
      </div>
      <div className="mv-home-list"></div>
    </div>
  );
};

export default Home;
