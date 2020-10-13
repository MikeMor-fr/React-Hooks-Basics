import React from "react";
import "../search-box/search-box.style.css";

export const SearchFilterBox = ({ handleChange }) => (
  <select name="mail" id="mail" onChange={handleChange}>
    <option value="" id="default">
      All
    </option>
    <option value="biz">.biz</option>
    <option value="tv">.tv</option>
  </select>
);
