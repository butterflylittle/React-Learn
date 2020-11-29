import React from "react";
import { useParams } from "react-router-dom";
import data from "./data";

const len = 5;
// 获取数据 如果是all则合并数组数据
function getData(type) {
  if (type === "all") {
    return Object.values(data).flat();
  }
  return data[type];
}

function List() {
  let { type = "all", page = 1 } = useParams();
  // 获取当前页数据，判断index
  let nowData = getData(type).filter((item, index) => {
    return index >= (page - 1) * len && index < page * len;
  });
  console.log(nowData);

  return (
    <ul className="list">
      {nowData.length > 0
        ? nowData.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })
        : "暂无数据"}
    </ul>
  );
}

export default List;
