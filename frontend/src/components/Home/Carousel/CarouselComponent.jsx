import React, { useContext, useEffect, useState } from "react";

import "./CarouselComponent.css";

import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import userContext from "../../../context/userContext";
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";

const APIkey = "AIzaSyCW62Nn00V6RCkSvLJ0_i0zSg097Xj30hQ";
const channelId = "UC4Pc9V7-QjsJZKkUS8I0iqw";
const result = "100";

// const finalUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=${result}&order=date&key=${API}`;

const CarouselComponent = () => {
  // const s = useContext(userContext);

  // const [loader, setLoader] = useState(false);
  // const loaderCSS = css`
  //   position: fixed;
  //   top: 50%;
  //   left: 50%;
  // `;
  // const [youtubeUrl, setyoutubeUrl] = useState([]);

  // async function getVideos() {
  //   console.log();
  //   try {
  // const response = await fetch(finalUrl);
  // const data = await response.json();
  // const data2 = data.items.map((e) => {
  //   return e.id.videoId;
  // });
  // setyoutubeUrl([...data2]);
  // console.log(youtubeUrl);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   getVideos();
  // }, []);

  return (
    <>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={45}
        totalSlides={2}
        interval={5000}
        isPlaying={true}
        infinite={true}
      >
        <Slider>
          <Slide index={0}>
            {" "}
            <img
              src="images/CollegeImg.jpeg"
              alt="Img"
              style={{ width: "100%" }}
            />
          </Slide>
          <Slide index={1}>
            {" "}
            <iframe
              width="100%"
              height="100%"
              // src={`https://www.youtube.com/embed/${youtubeUrl[0]}`}
              src={`https://www.youtube.com/embed/PbqfY_XCLPY`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Slide>
        </Slider>
      </CarouselProvider>
    </>
  );
};

export default CarouselComponent;
