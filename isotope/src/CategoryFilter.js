//CategoryFilter.js
import React, { useEffect } from "react";

import "./CategoryData.css";

const LS_KEY_CATEGORY = "LS_KEY_CATEGORY";
const LS_KEY_MULTI_CATEGORY = "LS_KEY_MULTI_CATEGORY";

const CategoryFilter = ({
  categories,
  category,
  setCatecory,
  setMultiCatecory,
}) => {
  const makeCategories = () => {
    if (categories.length === 0) return;
    if (setMultiCatecory) {
      //카테고리 멀티선택
      return categories.map((item, idx) => (
        <div
          key={idx}
          className={
            category.includes(item.value) || item.value === category
              ? "category-child selected"
              : "category-child"
          }
          onClick={() => {
            //카테고리 all을 선택하면 category에 all을 삽입
            if (item.value === "all") {
              setMultiCatecory(item.value);

              localStorage.setItem(LS_KEY_MULTI_CATEGORY, item.value);
            } else {
              //카테고리가 all이 아닌 것을 선택하면 배열에 추가로 등록
              if (!Array.isArray(category)) {
                category = [];
              }
              if (category.includes(item.value)) {
                setMultiCatecory(
                  category.filter((element) => element !== item.value)
                );
              } else {
                setMultiCatecory([...category, item.value]);
              }
              localStorage.setItem(LS_KEY_MULTI_CATEGORY, category);
            }
          }}
        >
          {item.name}
        </div>
      ));
    } else {
      //카테고리 싱글선택
      return categories.map((item, idx) => (
        <div
          key={idx}
          className={
            item.value === category
              ? "category-child selected"
              : "category-child"
          }
          onClick={() => {
            setCatecory(item.value);
            localStorage.setItem(LS_KEY_CATEGORY, item.value);
          }}
        >
          {item.name}
        </div>
      ));
    }
  };

  const init = () => {
    let data = localStorage.getItem(LS_KEY_CATEGORY);
    let dataMulti = localStorage.getItem(LS_KEY_MULTI_CATEGORY);

    if (setMultiCatecory && dataMulti !== null) {
      setMultiCatecory(dataMulti);
    } else if (setCatecory && data !== null) {
      setCatecory(data);
    }
  };

  useEffect(init, []);
  useEffect(() => {
    if (category !== "all") {
      localStorage.setItem(LS_KEY_MULTI_CATEGORY, category);
    }
    if (category.length === 0) {
      localStorage.setItem(LS_KEY_MULTI_CATEGORY, "all");
    }
  }, [category]);

  return (
    <div>
      <div className="category-set">{makeCategories()}</div>
    </div>
  );
};

export default CategoryFilter;
