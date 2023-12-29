import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "../Data";
import Product from "./Product";

const SearchItem = () => {
  const { term } = useParams();
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const filterData = () => {
      const data = items.filter((p) =>
        p.title.toLocaleLowerCase().includes(term.toLocaleLowerCase())
      );
      // console.log('filterData',data)
      setFilterData(data);
    };
    filterData();
  }, [term]);

  return (
    <div>
      <Product items={filterData}></Product>
    </div>
  );
};

export default SearchItem;
