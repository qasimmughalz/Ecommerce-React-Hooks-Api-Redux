import { useEffect, useState } from "react";
import { Cards } from "../Card/Cards";
import { Pages } from "./Pages";
import { Posts } from "./Posts";

export const DataPagination = ({ DataLength, data, loading }) => {
  const [toshow, settoShow] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  console.log("I am in pagination bro ", loading);

  const lastPost = currentPage * toshow;
  const firstPost = lastPost - toshow;
  const current = data.slice(firstPost, lastPost);

  const updatePage = (val) => {
    setCurrentPage(val);
  };

  return (
    <div>
      <Posts data={current} loading={loading}>
        {" "}
      </Posts>
      <Pages
        totalLength={DataLength}
        toShow={toshow}
        getPageNumber={updatePage}
      ></Pages>
    </div>
  );
};
