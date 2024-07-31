import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import galeri1 from "../img/galeri1.jpg";
import galer2 from "../img/galer2.jpg";
import galer3 from "../img/galer3.jpg";
import galeri4 from "../img/galeri4.jpg";
import galeri5 from "../img/galeri5.jpg";
import galeri6 from "../img/galeri6.jpg";
import galeri7 from "../img/galeri7.jpg";
import galeri8 from "../img/galeri8.jpg";
import galeri9 from "../img/galeri9.jpg";
import galeri10 from "../img/galeri10.jpg";
import galeri11 from "../img/galeri11.jpg";
import galeri12 from "../img/galeri12.jpg";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <ImageList
      style={{ width: "100%", height: "100%", margin: 0, padding: 0 }}
      variant="quilted"
      cols={4}
      rowHeight={200}
    >
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
            style={{ width: "100%", height: "100%" }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: galeri1,
    title: "Gallery Image 1",
    rows: 2,
    cols: 2,
  },
  {
    img: galer2,
    title: "Gallery Image 2",
  },
  {
    img: galer3,
    title: "Gallery Image 3",
  },
  {
    img: galeri4,
    title: "Gallery Image 4",
    cols: 2,
  },
  {
    img: galeri5,
    title: "Gallery Image 5",
    cols: 2,
  },
  {
    img: galeri6,
    title: "Gallery Image 6",
    rows: 2,
    cols: 2,
  },
  {
    img: galeri7,
    title: "Gallery Image 7",
  },
  {
    img: galeri8,
    title: "Gallery Image 8",
  },
  {
    img: galeri9,
    title: "Gallery Image 9",
    rows: 2,
    cols: 2,
  },
  {
    img: galeri10,
    title: "Gallery Image 10",
  },
  {
    img: galeri11,
    title: "Gallery Image 11",
  },
  {
    img: galeri12,
    title: "Gallery Image 12",
    cols: 2,
  },
];
