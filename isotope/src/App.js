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
const categoryList02 = [
  {
    category: "design,pront,back",
    imgName: "포토샵",
    imgFileName: "img_ps.svg",
  },
  {
    category: "design,pront",
    imgName: "일러스트레이터",
    imgFileName: "img_ai.svg",
  },
  {
    category: "design,pront",
    imgName: "어도비XD",
    imgFileName: "img_xd.svg",
  },
  {
    category: "design",
    imgName: "HTML",
    imgFileName: "img_html.svg",
  },
  {
    category: "pront,back",
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
    category: "design,pront,back",
    imgName: "프리미어프로",
    imgFileName: "img_pr.svg",
  },
];
const App = () => {
  const [category, setCatecory] = useState("all");
  const [showList, setShowList] = useState(categoryList);
  const [multiCategory01, setMultiCatecory01] = useState("all");
  const [showMultiList01, setMultiShowList01] = useState(categoryList);
  const [multiCategory02, setMultiCatecory02] = useState("all");
  const [showMultiList02, setMultiShowList02] = useState(categoryList);
  const getCategory = (item, index) => {
    return (
      <div className="category-box" key={item.imgName}>
        <img
          className="category-skill"
          src={"./" + item.imgFileName}
          alt={item.imgName}
        />
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

  // 멀티01
  useEffect(() => {
    console.log(multiCategory01);
    setMultiShowList01(
      categoryList02.filter((item) => {
        if (multiCategory01 === "all") return true;
        if (!Array.isArray(multiCategory01)) {
          setMultiCatecory01(multiCategory01.split(","));
        }
        //multiCategory01에 선택된 것이 모두 포함되어 있는 것 선택
        let listArray = item.category.split(",");
        // 카테고리 단일 선택한 경우
        if (multiCategory01.length === 1) {
          if (listArray.includes(multiCategory01[0])) {
            return true;
          }
        } else {
          // 카테고리 다중 선택한 경우
          let a = listArray;
          let b = multiCategory01;
          if (Array.isArray(b) && b.every((item) => a.includes(item))) {
            return true;
          }
        }
        return false;
      })
    );
  }, [multiCategory01]);

  // 멀티02
  useEffect(() => {
    setMultiShowList02(
      categoryList02.filter((item) => {
        let listArray = item.category.split(",");
        if (multiCategory02 === "all") return true;
        if (listArray.length > 1) {
          // item.category가 배열인 경우
          let includeNum = 0;
          listArray.forEach((e) => {
            if (multiCategory02.includes(e)) includeNum += 1;
          });
          if (includeNum > 0) {
            return true;
          } else {
            return false;
          }
        } else if (multiCategory02.includes(item.category)) {
          // item.category가 단일 값인 경우
          return true;
        }
        return false;
      })
    );
  }, [multiCategory02]);
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
      <div>멀티카테고리01(선택된 것중 하나라도 없으면 안됨)</div>
      <CategoryFilter
        categories={categories}
        category={multiCategory01}
        setMultiCatecory={setMultiCatecory01}
      />
      <div className="category01">
        {showMultiList01.map((item, index) => getCategory(item, index))}
      </div>
      <div>멀티카테고리02(선택된 것중 하나만 있어도 됨)</div>
      <CategoryFilter
        categories={categories}
        category={multiCategory02}
        setMultiCatecory={setMultiCatecory02}
      />
      <div className="category01">
        {showMultiList02.map((item, index) => getCategory(item, index))}
      </div>
    </div>
  );
};

export default App;
