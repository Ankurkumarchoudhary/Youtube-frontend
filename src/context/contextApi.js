import React, { useState, useEffect, createContext } from "react";

import { FetchDataFromApi } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
  const [loading, setLoding] = useState(false);
  const [searchResults, setSearchResult] = useState(false);
  const [selectCategories, setSelectCategories] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    fetchSelectCategoryData(selectCategories);
  }, [selectCategories]);

  const fetchSelectCategoryData = (query) => {
    setLoding(true);
    FetchDataFromApi(`search/?q=${query}`).then(({contents}) => {
      console.log(contents);
      setLoding(false);
    });
  };
  return (
    <Context.Provider
      value={{
        loading,
        setLoding,
        searchResults,
        setSearchResult,
        selectCategories,
        setSelectCategories,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
