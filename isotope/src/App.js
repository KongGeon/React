import React, { useState, useEffect } from "react";
import CategoryFilter from "./CategoryFilter";
import "./reset.css";
import "./CategoryData.css";

const categories = [
  {
    name: "ALL",
    value: "all",
  },
  {
    name: "DESIGN",
    value: "design",
  },
  {
    name: "PRONT",
    value: "pront",
  },
  {
    name: "BACK",
    value: "back",
  },
  {
    name: "ETC",
    value: "etc",
  },
];

const categoryList = [
  {
    category: "design",
    imgName: "포토샵",
    imgFileName: "img_ps.svg",
  },
  {
    category: "design",
    imgName: "일러스트레이터",
    imgFileName: "img_ai.svg",
  },
  {
    category: "design",
    imgName: "어도비XD",
    imgFileName: "img_xd.svg",
  },
  {
    category: "pront",
    imgName: "HTML",
    imgFileName: "img_html.svg",
  },
  {
    category: "pront",
    imgName: "CSS",
    imgFileName: "img_css.svg",
  },
  {
    category: "back",
    imgName: "몽고DB",
    imgFileName: "img_mong.svg",
  },
  {
    category: "back",
    imgName: "파이어베이스",
    imgFileName: "img_fire.svg",
  },
  {
    category: "etc",
    imgName: "에프터이팩트",
    imgFileName: "img_ae.svg",
  },
  {
    category: "etc",
    imgName: "프리미어프로",
    imgFileName: "img_pr.svg",
  },
];

const App = () => {
  const [category, setCatecory] = useState("all");
  const [showList, setShowList] = useState(categoryList);
  const [multiCategory, setMultiCatecory] = useState("all");
  const [showMultiList, setMultiShowList] = useState(categoryList);

  const getCategory = (item, index) => {
    return (
      <div className="category-box" key={item.imgName}>
        <img className="category-skill" src={"./" + item.imgFileName} alt={item.imgName} />
      </div>
    );
  };

  // 싱글
  useEffect(() => {
    setShowList(
      categoryList.filter((item) => {
        if (category === "all") return true;
        if (category === item.category) return true;
        return false;
      })
    );
  }, [category]);

  // 멀티
  useEffect(() => {
    setMultiShowList(
      categoryList.filter((item) => {
        if (multiCategory === "all") return true;
        if (multiCategory.includes(item.category)) return true;
        return false;
      })
    );
  }, [multiCategory]);

  return (
    <div>
      <div>카테고리</div>
      <CategoryFilter
        categories={categories}
        category={category}
        setCatecory={setCatecory}
      />
      <div className="category01">
          {showList.map((item, index) => getCategory(item, index))}
      </div>
      <div>멀티카테고리</div>
      <CategoryFilter
        categories={categories}
        category={multiCategory}
        setMultiCatecory={setMultiCatecory}
      />
      <div className="category01">
          {showMultiList.map((item, index) => getCategory(item, index))}
      </div>
    </div>
  );
};

export default App;
